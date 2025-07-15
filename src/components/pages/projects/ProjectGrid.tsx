'use client';

import {ProjectCard} from "@/components/pages/projects/ProjectCard";
import {ProjectGridProps} from "@/types/project";

export const ProjectsGrid = ({
    projects,
}:ProjectGridProps) => {
    return (
        <section className="flex flex-col gap-4 md:gap-0">
            {projects.reverse().map((project, index) => (
                <ProjectCard
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    className=""
                    reverse={index % 2 !== 0}
                />
            ))}
        </section>
    );
};