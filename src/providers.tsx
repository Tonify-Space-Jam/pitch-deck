'use client';

import React from 'react';
import { NextIntlClientProvider } from 'next-intl';

interface ClientProvidersProps {
  locale: string;
  messages: Record<string, any>;
  children: React.ReactNode;
}

export function IntlClientProvider({ locale, messages, children }: ClientProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 