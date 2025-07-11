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
