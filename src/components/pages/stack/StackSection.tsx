import {StackGrid} from "@/components/pages/stack/StackGrid";
import {ToolsGrid} from "@/components/pages/stack/ToolsGrid";
import {StackSectionProps} from "@/types/stack";

export const StackSection = ({
    stackDetails,
    toolsContent
}:StackSectionProps) => {
    return (
        <section className="flex flex-col items-center gap-24 bg-background-variant
        p-10 sm:px-20 sm:py-12 md:px-28 md:py-14 lg:px-36 lg:py-18">
            <StackGrid stackDetails={stackDetails} />
            <ToolsGrid {...toolsContent}/>
        </section>
    )
}