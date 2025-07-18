
export type ButtonProps = {
    label: string;
    onClick?: () => void;
    linkHref: string;
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

export type SectionHeaderProps = {
    heading: string;
    className?: string;
}

export type CallToActionProps = {
    heading: string;
    subheading: string;
    image: string;
    buttons?: ButtonProps[];
    className?: string;
}

export type StepIndicatorProps = {
    value: number;
    maxSteps?: number;
    className?: string;
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

export interface ImageSliderProps {
    images: string[];
    alt?: string;
}