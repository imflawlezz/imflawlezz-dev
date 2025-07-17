import Stack from "@/app/[locale]/stack/page";

export type Stack = {
    category: StackCategory[];
}

export type StackCategory = {
    heading: string;
    description: string;
    technology: Technology[];
}

export type Technology = {
    name: string;
    description: string;
    proficiency: number;
    image: string;
}

export type Tool = {
    name: string;
    image: string;
    description: string;
    href: string;
}

export type StackSectionProps = {
    stackDetails: Stack;
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

export type StackGridProps = {
    stackDetails: Stack
}
export type ToolsGridProps = {
    heading: string;
    subheading: string;
    tools: {
        name: string;
        image: string;
        description: string;
        href: string;
    }[]
}