-- Cleanup for old Telegram reminder test jobs in Supabase.
--
-- Run the first SELECT to review all Telegram-related jobs.
-- Then run the second SELECT to review only jobs that look like old tests.
-- If the second SELECT shows the "Scheduled test OK" jobs, uncomment and run
-- the DO block to unschedule only those test jobs.

select
  jobid,
  jobname,
  schedule,
  command,
  active
from cron.job
where jobname ilike '%telegram%'
   or command ilike '%telegram%'
   or command ilike '%sendMessage%'
   or command ilike '%telegram-reminder%';

select
  jobid,
  jobname,
  schedule,
  command,
  active
from cron.job
where command ilike '%Scheduled test OK%'
   or jobname ilike '%telegram%test%'
   or jobname ilike '%test%telegram%';

-- After reviewing the second SELECT output, uncomment this block to remove the
-- matching test jobs.
--
-- do $$
-- declare
--   job record;
-- begin
--   for job in
--     select jobid, jobname
--     from cron.job
--     where command ilike '%Scheduled test OK%'
--        or jobname ilike '%telegram%test%'
--        or jobname ilike '%test%telegram%'
--   loop
--     raise notice 'Unscheduling cron job % (%)', job.jobname, job.jobid;
--     perform cron.unschedule(job.jobid);
--   end loop;
-- end $$;
