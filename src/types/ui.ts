import {ReactNode} from "react";
import type {Project} from "@/types/project";
import {NavItem} from "@/types/navigation";

export type NavLinkProps = {
    item: NavItem;
    isActive?: boolean;
    onClick?: () => void;
};

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    linkHref?: string;
    className?: string;
    isPrimary?: boolean;
}

export type BadgeProps = {
    label: string;
    className?: string;
}

export type LinkComponentProps = {
    label: string;
    href: string;
    className?: string;
}

export type HeroProps = {
    heading: string;
    subheading: string;
    imageUrl: string;
    className?: string;
}

export type SectionHeaderProps = {
    heading: string;
    className?: string;
}

export type CallToActionProps = {
    heading: string;
    subheading: string;
    imageUrl: string;
    buttons?: ButtonProps[];
    className?: string;
}

export type ImageSplitSectionProps = {
    imageUrl: string;
    imageAlt?: string;
    reverse?: boolean;
    children: ReactNode;
};

export type FeaturedProjectCardProps = Pick<Project, 'id' | 'title' | 'description' | 'technologies' | 'imageUrl'> & {
    className?: string;
    isActive: boolean;
    onActivate: (id: number) => void;
};

export type ProjectCardProps = Pick<Project, 'id' | 'title' | 'description' | 'technologies' | 'imageUrl'> & {
    className?: string;
    reverse: boolean;
};

export type ContactFormProps = {
    heading: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    buttonPlaceholder: string;
    className?: string;
}

export type StepIndicatorProps = {
    value: number;
    maxSteps?: number;
    className?: string;
    barWidth?: number;
    barHeight?: number;
    spacing?: number;
    filledColor?: string;
    emptyColor?: string;
}

export interface PageNavProps {
    mainLink: { href: string; label: string };
    prevLink?: { href: string; label?: string };
    nextLink?: { href: string; label?: string };
    className?: string;
}

export interface ProjectHeroProps {
    heading: string;
    imageUrl: string;
}

export interface ImageSliderProps {
    images: string[];
    alt?: string;
}