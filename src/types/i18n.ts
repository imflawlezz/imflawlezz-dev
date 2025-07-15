import {FooterLink} from "@/types/layout";
import {Project} from "@/types/project";

export interface HomeMessages {
    hero: {
        heading: { text: string; br?: boolean; className?: string; prefix?: string }[];
        paragraph: string[];
        buttons: { label: string; linkHref: string; isPrimary?: boolean }[];
    };
    featuredProject: {
        heading: string;
        linkContent: { label: string; href: string };
        projects: Project[];
    };
    stackOverview: {
        heading: string;
        stack: { name: string; icon: string }[];
        linkContent: { label: string; href: string };
    };
    aboutMe: {
        heading: string;
        paragraph: string[];
    };
    callToAction: {
        heading: string;
        subheading: string;
        image: string;
        buttons: { label: string; linkHref: string; className?: string }[];
        className?: string;
    };
}

export interface LayoutMessages {
    navItems: {
        label: string; href: string;
    }[];
    footerLinks: FooterLink[];
    footer: {
        sitemapTitle: string;
        infoTitle: string;
        infoQuote: string;
        locationNote: string;
        downloadCv: string;
        contactTitle: string;
        email: string;
        madeWith: string;
        madeWithTech: string;
        copyright: string;
    };
}
