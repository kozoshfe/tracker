-- Professional, readable storage for Tracker.
-- Run this whole file once in Supabase SQL Editor.
-- The old tracker_state table is intentionally kept as a backup.

create table if not exists public.tracker (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  value text not null check (char_length(trim(value)) > 0),
  done boolean not null default false,
  priority text,
  section text not null check (section in ('goals', 'rules', 'board')),
  color text not null default 'purple',
  icon text,
  position integer not null default 1 check (position > 0),
  reminder_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists tracker_user_section_position_idx
  on public.tracker (user_id, section, position);

create table if not exists public.tracker_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.tracker enable row level security;
alter table public.tracker_settings enable row level security;

drop policy if exists "Users can manage own tracker tasks" on public.tracker;
create policy "Users can manage own tracker tasks"
on public.tracker for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users can manage own tracker settings" on public.tracker_settings;
create policy "Users can manage own tracker settings"
on public.tracker_settings for all
using (user_id = auth.uid())
with check (user_id = auth.uid());

-- One-time migration of the existing tracker_state rows, when they belong to
-- authenticated users. It is safe to run again.
insert into public.tracker (id, user_id, value, section, color, icon, position)
select
  (item->>'id')::uuid,
  legacy.id::uuid,
  item->>'title',
  item->>'type',
  coalesce(item->>'color', 'purple'),
  item->>'icon',
  coalesce((item->>'order')::integer, ordinal::integer)
from public.tracker_state as legacy
cross join lateral jsonb_array_elements(coalesce(legacy.state->'items', '[]'::jsonb)) with ordinality as source(item, ordinal)
where legacy.id ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
  and item->>'id' ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
  and item->>'type' in ('goals', 'rules')
  and coalesce(trim(item->>'title'), '') <> ''
on conflict (id) do update set
  user_id = excluded.user_id,
  value = excluded.value,
  section = excluded.section,
  color = excluded.color,
  icon = excluded.icon,
  position = excluded.position,
  updated_at = now();

insert into public.tracker (id, user_id, value, done, section, color, icon, position)
select
  (item->>'id')::uuid,
  legacy.id::uuid,
  item->>'title',
  case
    when jsonb_typeof(legacy.state->'boardChecks'->(item->>'id')) = 'boolean'
      then (legacy.state->'boardChecks'->>(item->>'id'))::boolean
    else false
  end,
  'board',
  coalesce(item->>'color', 'purple'),
  item->>'icon',
  coalesce((item->>'order')::integer, ordinal::integer)
from public.tracker_state as legacy
cross join lateral jsonb_array_elements(coalesce(legacy.state->'boardItems', '[]'::jsonb)) with ordinality as source(item, ordinal)
where legacy.id ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
  and item->>'id' ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
  and coalesce(trim(item->>'title'), '') <> ''
on conflict (id) do update set
  user_id = excluded.user_id,
  value = excluded.value,
  done = excluded.done,
  section = excluded.section,
  color = excluded.color,
  icon = excluded.icon,
  position = excluded.position,
  updated_at = now();

insert into public.tracker_settings (user_id, state, updated_at)
select id::uuid, state, updated_at
from public.tracker_state
where id ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
on conflict (user_id) do nothing;
