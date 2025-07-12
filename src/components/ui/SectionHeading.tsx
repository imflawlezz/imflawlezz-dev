import {SectionHeaderProps} from "@/types/ui";

export const SectionHeading = ({
    heading,
    className
}:SectionHeaderProps) => {
    return (
        <h1 className={`${className} font-semibold text-3xl lg:text-4xl 2xl:text-5xl`}>
            {heading}
        </h1>
    )
}