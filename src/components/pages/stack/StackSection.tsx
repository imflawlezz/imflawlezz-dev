import {StackGrid} from "@/components/pages/stack/StackGrid";

export const StackSection = () => {
    return (
        <section className="flex flex-col gap-2.5 p-10 sm:px-20 sm:py-12 md:px-28 md:py-14 lg:px-36 lg:py-18">
            <StackGrid/>
        </section>
    )
}