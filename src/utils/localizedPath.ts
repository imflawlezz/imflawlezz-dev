export function localizedPath(locale: string | string[], path: string) {
        if (path === '/') return `/${locale}`;
        return `/${locale}${path.startsWith('/') ? path : '/' + path}`;
}
