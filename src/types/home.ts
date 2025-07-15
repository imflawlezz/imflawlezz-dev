import {ButtonProps} from "@/types/ui";
import {Project} from "@/types/project";

export type HeadingProps = {
    text: string;
    className?: string;
    br?: boolean;
    prefix?: string;
}
export type HeroProps = {
    heading: HeadingProps[];
    paragraph: string[];
    buttons: ButtonProps[];
}

export type FeaturedProjectsProps = {
    heading: string;
    linkContent: {
        label: string,
        href: string,
    },
    projects: Project[]
}

export type StackOverviewProps = {
    heading: string;
    stack: {
        name: string,
        icon: string
    }[]
    ,
    linkContent: {
        label: string,
        href: string,
    }
}

export type ShortAboutMeProps = {
    heading: string;
    paragraph: string[];
}