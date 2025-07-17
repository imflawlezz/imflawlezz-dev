export type ProjectGridProps = {
    projects: Project[];
}

export type ProjectCardProps = Pick<Project, 'id' | 'title' | 'description' | 'technologies' | 'imageUrl'> & {
    className?: string;
    reverse: boolean;
};

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

export interface ProjectHeroProps {
    heading: string;
    imageUrl: string;
}