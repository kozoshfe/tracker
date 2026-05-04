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

GitHub cron uses UTC, so the workflow has two schedule entries:

```text
0 20 * * *
0 21 * * *
```

The workflow checks the real `Europe/Kyiv` time and sends only when it is `23:00`. This keeps working across winter and summer time.

## 5. Test it

Open `GitHub -> Repository -> Actions -> Telegram reminder -> Run workflow`.

Keep `force=true` for the test. If the message arrives in Telegram, the scheduled reminder is ready.
