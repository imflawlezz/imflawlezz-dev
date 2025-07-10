'use client';

import { useState } from 'react';

export const LanguageSwitcher = () => {
    const [currentLang, setCurrentLang] = useState<'en' | 'pl' | 'ru'>('en');

    const languages = [
        { code: 'en', label: 'EN' },
        { code: 'pl', label: 'PL' },
        { code: 'ru', label: 'RU' },
    ];

    return (
        <div className="flex items-center gap-3 text-base">
            {languages.map(({ code, label }) => (
                <button
                    key={code}
                    className={`px-2 py-1 rounded-sm transition font-bold ${
                        currentLang === code
                            ? 'text-background bg-foreground'
                            : 'hover:text-white hover:bg-accent-secondary'
                    }`}
                    onClick={() => setCurrentLang(code as 'en' | 'pl' | 'ru' )}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};
