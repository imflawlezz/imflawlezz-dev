export interface HomeMessages {
    hero: {
        heading: { text: string; br?: boolean; className?: string; prefix?: string }[];
        paragraph: string[];
        buttons: { label: string; linkHref: string; isPrimary?: boolean }[];
    };
    featuredProject: {
        heading: string;
        linkContent: { label: string; href: string };
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
