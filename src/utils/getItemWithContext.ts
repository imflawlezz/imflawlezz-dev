export function getItemWithContext<T extends { id: number }>(
    data: T[],
    id: number
): { item: T | undefined; prev?: T; next?: T } {
    const index = data.findIndex((item) => item.id === id);

    if (index === -1) return { item: undefined };

    return {
        item: data[index],
        prev: index > 0 ? data[index - 1] : undefined,
        next: index < data.length - 1 ? data[index + 1] : undefined,
    };
}
