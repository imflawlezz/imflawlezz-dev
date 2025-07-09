'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavLinkProps } from '@/types/navigation';

export const NavLink = ({
    item,
    isActive,
    onClick
}: NavLinkProps) => {
    const pathname = usePathname();
    const active = isActive ?? pathname === item.href;

    return (
        <Link
            href={item.href}
            onClick={onClick}
            className={`text-base font-medium transition-colors duration-200
                ${active ? 'text-accent' : 'text-muted hover:text-accent-hover'}
            `}
        >
            {item.label}
        </Link>
    );
};