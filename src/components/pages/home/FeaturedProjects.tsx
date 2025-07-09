'use client';
import { FeaturedProjectCard } from '@/components/pages/home/FeaturedProjectCard';
import { projects } from '@/data/projects';
import {LinkComponent} from "@/components/shared/LinkComponent";
import {SectionHeading} from "@/components/shared/SectionHeading";
import {useState} from "react";

export const FeaturedProjects = () => {

    const widthPattern = ['md:w-2/5', 'md:w-3/5', 'md:w-3/5', 'md:w-2/5'];
    const [activeCardId, setActiveCardId] = useState<number | null>(null);

    return (
        <section className="flex flex-col items-center py-8 gap-8 md:py-12 md:gap-12 bg-background-variant">
            <SectionHeading heading={'Featured Projects'}/>
            <div className="w-full flex flex-wrap">
                {projects.slice(-4).reverse().map((project, idx) => (
                    <FeaturedProjectCard
                        key={project.id}
                        {...project}
                        isActive={activeCardId === project.id}
                        onActivate={(id) => setActiveCardId(id === activeCardId ? null : id)}
                        className={`${widthPattern[idx % widthPattern.length]} w-full`}
                    />
                ))}
            </div>
            <LinkComponent
                label={'View all projects'}
                href={'/projects'}
            />
        </section>
    );
};
