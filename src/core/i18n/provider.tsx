import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import React from "react";

import { timeZone } from "./config";

// замечательная вещь для мультиязычности в будущем
// переводы в public/locales
const I18nProvider: React.FC<React.PropsWithChildren> = async ({
  children,
}) => {
  const messages = await getMessages();
  return (
    <NextIntlClientProvider messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
};

export { I18nProvider };
