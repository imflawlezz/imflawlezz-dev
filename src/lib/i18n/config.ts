export const locales = ['en', 'pl', 'ru', 'ja'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];
