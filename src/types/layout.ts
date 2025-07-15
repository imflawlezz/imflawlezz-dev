import {Locale} from "@/lib/i18n/config";
import {ReactNode} from "react";

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

export type HeroProps = {
    heading: string;
    subheading: string;
    image: string;
}

export type ImageSplitSectionProps = {
    imageUrl: string;
    imageAlt?: string;
    reverse?: boolean;
    children: ReactNode;
};

export type ImageSplitSectionRendererProps = {
    heading: string;
    reverse?: boolean;
    image: string;
    paragraph: string[];
};