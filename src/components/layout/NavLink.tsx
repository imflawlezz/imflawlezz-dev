'use client';

import Link from 'next/link';
import {useParams, usePathname} from 'next/navigation';
import type { NavLinkProps } from '@/types/layout';
import {localizedPath} from "@/utils/localizedPath";

export const NavLink = ({
                            item,
                            isActive,
                            onClick
                        }: NavLinkProps) => {
    const locale = useParams()?.locale || 'en';
    const pathname = usePathname();

    const fullLocalizedPath = localizedPath(locale, item.href);
    const active = isActive ?? pathname === fullLocalizedPath;

    return (
        <Link
            href={fullLocalizedPath}
            onClick={onClick}
            className={`text-xl md:text-base font-medium transition-colors duration-200
                ${active ? 'text-accent' : 'text-muted hover:text-accent-hover'}
            `}
        >
            {item.label}
        </Link>
    );
};
