import { ImageSplitSection } from '@/components/shared/ImageSplitSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {ImageSplitSectionRendererProps} from "@/types/layout";


export const ImageSplitSectionRenderer = ({
    heading,
    reverse,
    paragraph,
    image

}:ImageSplitSectionRendererProps) => {
    return (
        <ImageSplitSection imageUrl={image} reverse={reverse}>
            <SectionHeading heading={heading} />
            <div className="flex flex-col gap-4 text-muted text-base md:text-lg">
                {paragraph.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
        </ImageSplitSection>
    );
};
