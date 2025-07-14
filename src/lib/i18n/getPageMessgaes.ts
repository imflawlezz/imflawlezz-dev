import { Locale } from './config';

export async function getPageMessages<T = unknown>(
    locale: Locale,
    page: string
): Promise<T> {
    const messages = await import(`@/content/${locale}/${page}.json`);
    return messages.default as T;
}
