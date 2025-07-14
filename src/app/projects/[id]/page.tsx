import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import { getItemWithContext } from '@/utils/getItemWithContext';
import { ProjectHero } from '@/components/pages/projects/ProjectHero';
import { Badge } from '@/components/ui/Badge';
import { PageNav } from '@/components/shared/PageNav';
import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {ImageSlider} from "@/components/shared/ImageSlider";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const projectId = parseInt(id);

    const { item: project, prev, next } = getItemWithContext(projectsData, projectId);

    if (!project) return notFound();

    return (
        <main className="flex flex-col">
            <ProjectHero heading={project.title} imageUrl={project.imageUrl} />

            <section className="w-full md:px-16 xl:px-36">
                <div className="flex flex-col gap-8 bg-background-variant p-6 md:p-12 md:rounded-b-4xl">
                    <PageNav
                        mainLink={{ href: '/projects', label: 'All Projects' }}
                        prevLink={prev && { href: `/projects/${prev.id}`, label: prev.title }}
                        nextLink={next && { href: `/projects/${next.id}`, label: next.title }}
                    />

                    <div className="flex flex-wrap gap-3">
                        <span className="text-lg font-semibold">Tags:</span>
                        <div className="flex flex-row flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <Badge key={idx} label={tech} className="bg-accent" />
                            ))}
                        </div>
                    </div>

                    <div className="text-lg text-muted">
                        <p>{project.description}</p>
                    </div>

                    {project.fullDescription && (
                        <div className="text-lg">
                            <p className="text-lg font-semibold">Description:</p>
                            <p>{project.fullDescription}</p>
                        </div>
                    )}

                    {project.features && (
                        <div className="text-lg">
                            <p className="text-lg font-semibold">Features:</p>
                            <ul
                            className="list-disc list-inside">
                                {project.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {project.screenshots && (
                        <div className="text-lg flex flex-col gap-2">
                            <p className="text-lg font-semibold">Screenshots:</p>
                            <ImageSlider images={project.screenshots}/>
                        </div>
                    )}

                    {project.devComment && (
                        <div className="text-lg">
                            <p className="font-semibold">Dev notes:</p>
                            <p className="italic">&#34;{project.devComment}&#34;</p>
                        </div>
                    )}

                    <div className="flex flex-row gap-8 items-center justify-between md:justify-start text-accent-secondary underline-offset-2">
                        {project.liveUrl && (
                            <Link
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row gap-2 items-center hover:underline
                                hover:text-accent-secondary-hover transition duration-300"
                            >
                                <RocketLaunchIcon className="w-5 h-5" />
                                View Live
                            </Link>
                        )}

                        {project.githubUrl && (
                            <Link
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-row gap-2 items-center hover:underline
                                hover:text-accent-secondary-hover transition duration-300"
                            >
                                <CodeBracketIcon className="w-5 h-5" />
                                View Source
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
