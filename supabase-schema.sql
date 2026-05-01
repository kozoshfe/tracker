create table if not exists public.tracker_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.tracker_state enable row level security;

drop policy if exists "Allow personal tracker sync" on public.tracker_state;
drop policy if exists "Users can read own tracker state" on public.tracker_state;
drop policy if exists "Users can insert own tracker state" on public.tracker_state;
drop policy if exists "Users can update own tracker state" on public.tracker_state;
drop policy if exists "Users can delete own tracker state" on public.tracker_state;

create policy "Users can read own tracker state"
on public.tracker_state
for select
using (id = auth.uid()::text);

create policy "Users can insert own tracker state"
on public.tracker_state
for insert
with check (id = auth.uid()::text);

create policy "Users can update own tracker state"
on public.tracker_state
for update
using (id = auth.uid()::text)
with check (id = auth.uid()::text);

create policy "Users can delete own tracker state"
on public.tracker_state
for delete
using (id = auth.uid()::text);
