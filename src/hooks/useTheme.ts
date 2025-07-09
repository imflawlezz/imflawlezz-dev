import { useEffect, useState } from 'react';
import { applyTheme, getStoredTheme, getSystemTheme, Theme } from '@/lib/theme';

export const useTheme = () => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const stored = getStoredTheme();
        const initial = stored ?? getSystemTheme();
        setTheme(initial);
        applyTheme(initial);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return { theme, toggleTheme };
};
