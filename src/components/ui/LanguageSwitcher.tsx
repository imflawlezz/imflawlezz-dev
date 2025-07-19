'use client';

import { usePathname, useRouter, useParams } from 'next/navigation';
import { locales } from '@/lib/i18n/config';

export const LanguageSwitcher = () => {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const currentLang = params.locale as string;

    const languages = locales.map((code) => ({
        code,
        label: code.toUpperCase(),
    }));

    const handleLanguageChange = (lang: string) => {
        const segments = pathname.split('/');
        segments[1] = lang;
        const newPath = segments.join('/');
        router.push(newPath);
    };

    return (
        <div className="flex items-center gap-3 text-base">
            {languages.map(({ code, label }) => (
                <button
                    key={code}
                    className={`px-2 py-1 rounded-sm transition font-bold ${
                        currentLang === code
                            ? 'text-background bg-muted'
                            : 'text-muted hover:text-background hover:bg-accent'
                    }`}
                    onClick={() => handleLanguageChange(code)}
                >
                    {label}
                </button>
            ))}
        </div>
    );
};
