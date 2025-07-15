import { Locale } from "@/lib/i18n/config";
import { projectsData } from "@/data/projectsData";
import { Project } from "@/types/project";

export async function getLocalizedProjects(locale: Locale): Promise<Project[]> {
    const translations = await import(`@/content/${locale}/projectsData.json`).then(mod => mod.default);

    return projectsData.map((project) => {
        const translated = translations.find((t: Project) => t.id === project.id);
        return {
            ...project,
            ...translated,
        };
    });
}
