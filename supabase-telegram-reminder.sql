-- Telegram reminder scheduler for Supabase
-- Replace the placeholders below before running.
--
-- Why every hour?
-- Supabase cron commonly runs in UTC. The Edge Function itself checks
-- Europe/Kyiv local time and only sends at 23:00, so this keeps working
-- across daylight saving changes.

create extension if not exists pg_cron;
create extension if not exists pg_net;

select cron.unschedule('telegram-reminder-hourly')
where exists (
  select 1
  from cron.job
  where jobname = 'telegram-reminder-hourly'
);

select
  cron.schedule(
    'telegram-reminder-hourly',
    '0 * * * *',
    $$
    select
      net.http_post(
        url := 'https://PASTE_YOUR_PROJECT_REF.supabase.co/functions/v1/telegram-reminder',
        headers := jsonb_build_object(
          'Content-Type', 'application/json',
          'x-telegram-cron-secret', 'PASTE_THE_SAME_RANDOM_SECRET_HERE'
        ),
        body := jsonb_build_object('force', false),
        timeout_milliseconds := 10000
      ) as request_id;
    $$
  );
