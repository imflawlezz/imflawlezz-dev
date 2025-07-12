import { ImageSplitSection } from '@/components/shared/ImageSplitSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

type Props = {
    content: {
        heading: string;
        reverse?: boolean;
        imageUrl: string;
        paragraph: string[];
    };
};

export const ImageSplitSectionRenderer = ({ content }: Props) => {
    return (
        <ImageSplitSection imageUrl={content.imageUrl} reverse={content.reverse}>
            <SectionHeading heading={content.heading} />
            <div className="flex flex-col gap-4 text-muted text-base md:text-lg">
                {content.paragraph.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}
            </div>
        </ImageSplitSection>
    );
};
