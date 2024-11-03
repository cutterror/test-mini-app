# Assembly telegram mini app

Проект на безе шаблона https://github.com/Telegram-Mini-Apps/nextjs-template
с использованием:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TON Connect](https://docs.ton.org/develop/dapps/ton-connect/overview)
- [@telegram-apps SDK](https://docs.telegram-mini-apps.com/packages/telegram-apps-sdk/2-x)
- [Telegram UI](https://github.com/Telegram-Mini-Apps/TelegramUI)

Изначальный пакетный менеджер pnpm, но при использовании npm (10.5.0) проблем замечено не было.

- [pnpm](https://pnpm.io/)

## Install Dependencies

Установка зависимостей:

```Bash
npm install
```

## Scripts

- `dev`. Runs the application in development mode.
- `dev:https`. Runs the application in development mode using self-signed SSL
  certificate.
- `build`. Builds the application for production.
- `start`. Starts the Next.js server in production mode.
- `lint`. Runs [eslint](https://eslint.org/) to ensure the code quality meets
  the required
  standards.

To run a script, use the `pnpm run` command:

```Bash
npm run {script}
# Example: pnpm run build
```

## Run in Telegram

Для запуска приложения внутри телеграма для разработки в реальном окружении необходим
телеграм бот с приложением. Так как в качестве ссылки на сервер приложения используются
только ссылки с HTTPS, запускаем скрипт:

```Bash
npm run dev:https
```

Добавляем в боте телеграма ссылку на приложение:

https://127.0.0.1:3000
