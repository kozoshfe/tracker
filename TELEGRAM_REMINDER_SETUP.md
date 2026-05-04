# Telegram reminder setup

This setup sends a Telegram reminder every evening at `23:00` in `Europe/Kyiv`.

## 1. Create Edge Function secrets in Supabase

Open `Supabase -> Edge Functions -> Secrets` and add:

```text
TELEGRAM_BOT_TOKEN=PASTE_YOUR_BOT_TOKEN
TELEGRAM_CHAT_ID=PASTE_YOUR_CHAT_ID
TELEGRAM_CRON_SECRET=PASTE_ANY_LONG_RANDOM_STRING
APP_TIMEZONE=Europe/Kyiv
TELEGRAM_REMINDER_TEXT=Перевір, чи закрив всі завдання на сьогодні
```

`TELEGRAM_CRON_SECRET` should be a random private string. Example:

```text
tracker-telegram-secret-2026-very-long-random-string
```

## 2. Deploy the Edge Function

Function file:

- [/Users/m.kozosh/Downloads/Tracker/supabase/functions/telegram-reminder/index.ts](/Users/m.kozosh/Downloads/Tracker/supabase/functions/telegram-reminder/index.ts)

Deploy it with Supabase CLI:

```bash
supabase functions deploy telegram-reminder
```

If you deploy through the Dashboard, use the same function name:

```text
telegram-reminder
```

## 3. Create the hourly cron job

Open SQL Editor and run:

- [/Users/m.kozosh/Downloads/Tracker/supabase-telegram-reminder.sql](/Users/m.kozosh/Downloads/Tracker/supabase-telegram-reminder.sql)

Before running it, replace:

- `PASTE_YOUR_PROJECT_REF`
- `PASTE_THE_SAME_RANDOM_SECRET_HERE`

## 4. Send a test message

After deploy, invoke the function manually with:

```bash
curl -X POST \
  "https://PASTE_YOUR_PROJECT_REF.supabase.co/functions/v1/telegram-reminder" \
  -H "Content-Type: application/json" \
  -H "x-telegram-cron-secret: PASTE_THE_SAME_RANDOM_SECRET_HERE" \
  -d '{"force":true}'
```

`force: true` sends immediately, without waiting for 23:00.

## 5. What happens after that

- Supabase cron calls the function every hour.
- The function checks `Europe/Kyiv` local time.
- It sends the message only when local time is `23:00`.

## Files added

- [/Users/m.kozosh/Downloads/Tracker/supabase/functions/telegram-reminder/index.ts](/Users/m.kozosh/Downloads/Tracker/supabase/functions/telegram-reminder/index.ts)
- [/Users/m.kozosh/Downloads/Tracker/supabase-telegram-reminder.sql](/Users/m.kozosh/Downloads/Tracker/supabase-telegram-reminder.sql)
