export type Theme = 'light' | 'dark';

export const getSystemTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const getStoredTheme = (): Theme | null => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('theme') as Theme | null;
};

export const applyTheme = (theme: Theme) => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
};
