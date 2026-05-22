# Telegram reminder through GitHub Actions

This setup sends a Telegram reminder from a GitHub Actions scheduled workflow.

## 1. Add GitHub secrets

Open `GitHub -> Repository -> Settings -> Secrets and variables -> Actions -> Secrets` and add:

```text
TELEGRAM_BOT_TOKEN=PASTE_YOUR_BOT_TOKEN
TELEGRAM_CHAT_ID=PASTE_YOUR_CHAT_ID
```

## 2. Optional reminder text

Open `GitHub -> Repository -> Settings -> Secrets and variables -> Actions -> Variables` and add:

```text
TELEGRAM_REMINDER_TEXT=Перевір, чи закрив всі завдання на сьогодні
```

If it is missing, the workflow uses the default reminder text.

The message format is:

```text
Сьогодні: Середа

Перевір, чи закрив всі завдання на сьогодні
```

## 3. Push the workflow

The Telegram workflow is defined here:

- [/Users/m.kozosh/Downloads/Tracker/.github/workflows/telegram-reminder.yml](/Users/m.kozosh/Downloads/Tracker/.github/workflows/telegram-reminder.yml)

It runs automatically every day and can also be started manually from GitHub Actions.

## 4. Schedule

GitHub cron uses UTC and scheduled workflows can be delayed or occasionally
missed. The workflow now makes several attempts during the hour that maps to
`23:xx` in `Europe/Kyiv`:

```text
10,25,40,55 20,21 * * *
```

The workflow checks the real `Europe/Kyiv` time and sends only during the
`23:00` hour. It stores a daily sent marker in GitHub Actions cache, so
multiple attempts should not create duplicate scheduled reminders.

In summer, the `20:xx UTC` runs can send. In winter, the `21:xx UTC` runs can
send. Open a workflow run and check its summary: it says whether Telegram was
`sent`, already sent today, skipped by time, or rejected by Telegram.

## 5. Test it

Open `GitHub -> Repository -> Actions -> Telegram reminder -> Run workflow`.

The manual run sends immediately by default with `force=true`. Set `force=false`
only when you want to test the normal 23:00 Kyiv time gate. If it fails, open the workflow summary: it now
prints the Telegram `getMe` or `sendMessage` response so you can see whether
the bot token or chat id is wrong.

If the workflow is green but no notification appears, open that run and check
the run summary. A green run can still say `skipped` when the reminder was
already sent today or when the current Kyiv time is outside the allowed
`23:00` hour. When Telegram accepts the message, the summary shows `Result:
sent`, `Telegram message id`, masked `Telegram chat id`, and `Telegram chat
type`.

## 6. Clean up old Supabase test schedulers

If Telegram still receives messages like `Scheduled test OK UTC: ...`, those
are not sent by this GitHub Actions workflow. They are usually from an old
Supabase cron test job.

Open the Supabase SQL editor and run:

- [/Users/m.kozosh/Downloads/Tracker/supabase-telegram-cleanup.sql](/Users/m.kozosh/Downloads/Tracker/supabase-telegram-cleanup.sql)

Review the `select` output first. If it only lists old Telegram test/reminder
jobs, uncomment and run the cleanup block in the same file to unschedule them.
