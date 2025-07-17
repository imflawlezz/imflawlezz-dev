import {FooterLink} from "@/types/layout";
import {Project} from "@/types/project";
import {Milestone} from "@/types/about";
import {Stack, Tool} from "@/types/stack";

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

export interface AboutMessages {
    heroContent: {
        heading: string;
        subheading: string;
        image: string;
    };
    journeyContent: {
        heading: string;
        paragraph: string[];
        milestones: Milestone[];
    };
    valueContent: {
        heading: string;
        reverse?: boolean;
        paragraph: string[];
        image: string;
    };
    beyondContent: {
        heading: string;
        reverse?: boolean;
        paragraph: string[];
        image: string;
    };
    callToAction: {
        heading: string;
        subheading: string;
        image: string;
        buttons: { label: string; linkHref: string; className?: string }[];
        className?: string;
    };
}

export interface ProjectsMessages {
    heroContent: {
        heading: string;
        subheading: string;
        image: string;
    };
    callToAction: {
        heading: string;
        subheading: string;
        image: string;
        buttons: { label: string; linkHref: string; className?: string }[];
        className?: string;
    };
}

export type ProjectInfoMessages = {
    allProjectsLabel: string;
    tagsLabel: string;
    descriptionLabel: string;
    featuresLabel: string;
    screenshotsLabel: string;
    commentLabel: string;
    viewLiveLabel: string;
    viewSourceLabel: string;
};

export interface StackMessages {
    heroContent: {
        heading: string;
        subheading: string;
        image: string;
    };
    sectionContent: {
        stackDetails: Stack,
        toolsContent: {
            heading: string;
            subheading: string;
            tools: {
                name: string;
                image: string;
                description: string;
                href: string;
            }[]
        }
    }
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
