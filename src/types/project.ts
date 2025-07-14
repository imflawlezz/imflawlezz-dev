export type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    fullDescription?: string[];
    devComment?: string;
    features?: string[];
    screenshots?: string[];
};