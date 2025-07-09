'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="text-muted transition duration-500">
            {theme === 'light' ? (
                <MoonIcon className="w-6 h-6 hover:rotate-30 transition duration-500" />
            ) : (
                <SunIcon className="w-6 h-6 hover:rotate-60 transition duration-500" />
            )}
        </button>
    );
};
