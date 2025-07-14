import {Locale} from "@/lib/i18n/config";

export type NavItem = {
    label: string;
    href: string;
};

export type FooterLink = {
    label: string;
    linkHref: string;
    icon: string;
}

export type NavLinkProps = {
    item: NavItem;
    isActive?: boolean;
    onClick?: () => void;
};

export type HeaderProps = {
    navItems: NavItem[];
    locale: Locale;
};

export type FooterProps = {
    navItems: NavItem[],
    footerLinks: FooterLink[],
    footer: {
        sitemapTitle: string;
        infoTitle: string;
        infoQuote: string;
        locationNote: string;
        downloadCv: string
        contactTitle: string;
        email: string
        madeWith: string;
        madeWithTech: string;
        copyright: string;
    },
    locale: Locale;
}