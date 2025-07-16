import {notFound} from 'next/navigation';
import { getItemWithContext } from '@/utils/getItemWithContext';
import { ProjectHero } from '@/components/pages/projects/ProjectHero';
import { Badge } from '@/components/ui/Badge';
import { PageNav } from '@/components/shared/PageNav';
import { CodeBracketIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {ImageSlider} from "@/components/shared/ImageSlider";
import {getLocalizedProjects} from "@/utils/getLocalizedProjects";
import {Locale} from "@/lib/i18n/config";
import {getPageMessages} from "@/lib/i18n/getPageMessgaes";
import {ProjectInfoMessages} from "@/types/i18n";


export default async function ProjectPage({ params }: { params: Promise<{ locale: Locale, id: string}> }) {
    const { id } = await params;
    const { locale } = await params;
    const projectInfo = await getPageMessages<ProjectInfoMessages>(locale, 'projectInfo');
    const projectId = parseInt(id);
    const projects = await getLocalizedProjects(locale);


    const { item: project, prev, next } = getItemWithContext(projects, projectId);

    if (!project) return notFound();

    return (
        <main className="flex flex-col">
            <ProjectHero heading={project.title} imageUrl={project.imageUrl} />

            <section className="w-full md:px-16 xl:px-36">
                <div className="flex flex-col gap-8 bg-background-variant p-6 md:p-12 md:rounded-b-4xl">
                    <PageNav
                        mainLink={{ href: `./`, label: projectInfo.allProjectsLabel }}
                        prevLink={prev && { href: `${prev.id}`, label: prev.title }}
                        nextLink={next && { href: `${next.id}`, label: next.title }}
                    />

                    <div className="flex flex-wrap gap-3">
                        <span className="text-lg font-semibold">{projectInfo.tagsLabel}:</span>
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
                            <p className="text-lg font-semibold">{projectInfo.descriptionLabel}:</p>
                            <p>{project.fullDescription}</p>
                        </div>
                    )}

                    {project.features && (
                        <div className="text-lg">
                            <p className="text-lg font-semibold">{projectInfo.featuresLabel}:</p>
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
                            <p className="text-lg font-semibold">{projectInfo.screenshotsLabel}:</p>
                            <ImageSlider images={project.screenshots}/>
                        </div>
                    )}

                    {project.devComment && (
                        <div className="text-lg">
                            <p className="font-semibold">{projectInfo.commentLabel}:</p>
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
                                {projectInfo.viewLiveLabel}
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
                                {projectInfo.viewSourceLabel}
                            </Link>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
