export const locales = ['en', 'pl', 'ru', 'ja'] as const;
export const defaultLocale: Locale = 'en';

export type Locale = typeof locales[number];
