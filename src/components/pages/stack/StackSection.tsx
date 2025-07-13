import {StackGrid} from "@/components/pages/stack/StackGrid";
import {ToolsGrid} from "@/components/pages/stack/ToolsGrid";

export const StackSection = () => {
    return (
        <section className="flex flex-col items-center gap-24 p-10 sm:px-20 sm:py-12 md:px-28 md:py-14 lg:px-36 lg:py-18">
            <StackGrid/>
            <ToolsGrid/>
        </section>
    )
}