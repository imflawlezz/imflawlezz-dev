import { Hero } from "@/components/shared/Hero";
import { CallToAction } from "@/components/shared/CallToAction";
import { ProjectsGrid } from "@/components/pages/projects/ProjectGrid";
import { Locale } from "@/lib/i18n/config";
import { getPageMessages } from "@/lib/i18n/getPageMessgaes";
import { ProjectsMessages } from "@/types/i18n";
import { getLocalizedProjects } from "@/utils/getLocalizedProjects";

export default async function Projects({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const t = (await getPageMessages(locale, "projects")) as ProjectsMessages;
    const projects = await getLocalizedProjects(locale);

    return (
        <>
            <Hero {...t.heroContent} />
            <ProjectsGrid projects={projects} />
            <CallToAction {...t.callToAction} />
        </>
    );
}
