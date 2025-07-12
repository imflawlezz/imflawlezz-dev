export type Stack = {
    categories: StackCategory[];
}

export type StackCategory = {
    heading: string;
    description: string;
    technologies: Technology[];
}

export type Technology = {
    name: string;
    description: string;
    proficiency: number;
    iconUrl: string;
}