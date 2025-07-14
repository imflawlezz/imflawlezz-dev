import {resolveAsset} from "@/utils/resolveAsset";
import type { NavItem } from '@/types/navigation';

export const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Stack', href: '/stack' },
    { label: 'Contact', href: '/contact' },
];

export const footerLinks = [
    {
        label: "Telegram",
        linkHref: "#",
        icon: resolveAsset('icons', 'telegram.svg')
    },
    {
        label: "GitHub",
        linkHref: "#",
        icon: resolveAsset('icons', 'github.svg')
    },
    {
        label: "LinkedIn",
        linkHref: "#",
        icon: resolveAsset('icons', 'linkedin.svg')
    },
];

export const projectPageNavContent = {
    home: 'Home',
    next: 'Next',
    prev: 'Previous',
}