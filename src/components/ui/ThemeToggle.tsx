'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="w-8 h-8 md:w-6 md:h-6 text-muted transition duration-500">
            {theme === 'light' ? (
                <MoonIcon className="hover:rotate-30 transition duration-500" />
            ) : (
                <SunIcon className="hover:rotate-60 transition duration-500" />
            )}
        </button>
    );
};
