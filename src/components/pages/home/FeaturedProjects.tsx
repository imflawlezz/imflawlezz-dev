import { FeaturedProjectCard } from '@/components/pages/home/FeaturedProjectCard';
import { projects } from '@/data/projects';
import {LinkComponent} from "@/components/shared/LinkComponent";
import {SectionHeading} from "@/components/shared/SectionHeading";

export const FeaturedProjects = () => {

    const widthPattern = ['md:w-2/5', 'md:w-3/5', 'md:w-3/5', 'md:w-2/5'];

    return (
        <section className="flex flex-col items-center py-8 gap-8 md:py-12 md:gap-12">
            <SectionHeading heading={'Featured Projects'}/>
            <div className="w-full flex flex-wrap">
                {projects.slice(-4).reverse().map((project, idx) => {
                    const widthClass = widthPattern[idx % widthPattern.length];

                    return (
                        <FeaturedProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            imageUrl={project.imageUrl}
                            className={`${widthClass} w-full`}
                        />
                    );
                })}
            </div>
            <LinkComponent
                label={'View all projects'}
                href={'/projects'}
            />
        </section>
    );
};
