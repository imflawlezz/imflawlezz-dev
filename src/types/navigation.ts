export type NavItem = {
    label: string;
    href: string;
};

export type NavLinkProps = {
    item: NavItem;
    isActive?: boolean;
    onClick?: () => void;
};