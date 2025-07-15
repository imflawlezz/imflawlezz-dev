export type Milestone = {
    year?: string;
    label: string;
}

export type TimelineProps = {
    heading: string,
    paragraph: string[],
    milestones: Milestone[],
}