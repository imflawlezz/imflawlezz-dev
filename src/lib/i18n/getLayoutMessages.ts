import { Locale } from './config';

export async function getLayoutMessages<T = unknown>(locale: Locale): Promise<T> {
    const messages = await import(`@/content/${locale}/layout.json`);
    return messages.default as T;
}
