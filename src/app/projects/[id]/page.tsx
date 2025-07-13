import { notFound } from 'next/navigation';
import { projectsData } from '@/data/projectsData';
import { ProjectHero } from '@/components/pages/projects/ProjectHero';
import { Badge } from "@/components/ui/Badge";

export async function generateStaticParams() {
    return projectsData.map((p) => ({
        id: p.id.toString()
    }));
}

interface ProjectPageProps {
    params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const projectId = parseInt(params.id);
    const project = projectsData.find(p => p.id === projectId);

    if (!project) return notFound();

    return (
        <main className="flex flex-col">
            <ProjectHero heading={project.title} imageUrl={project.imageUrl} />

            <section className="w-full md:px-16 xl:px-36">
                <div className="flex flex-col gap-8 bg-background-variant p-6 md:p-12">
                    <div className="flex flex-wrap gap-3">
                        <span className="text-xl">Tags:</span>
                        <div className="flex flex-row flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                                <Badge key={idx} label={tech} className="bg-accent" />
                            ))}
                        </div>

                    </div>


                    <div className="text-lg text-muted">
                        <p>{project.fullDescription || project.description}</p>
                    </div>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent underline"
                        >
                            View Live
                        </a>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent underline"
                        >
                            View Source
                        </a>
                    )}
                </div>

            </section>
        </main>
    );
}
