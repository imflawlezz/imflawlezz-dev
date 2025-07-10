'use client';

export const LastUpdated = () => {
    const lastUpdated = new Date(process.env.NEXT_PUBLIC_LAST_UPDATED ?? new Date());

    const formatted = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(lastUpdated);

    return (
        <p className="">
            Last updated : <span>{formatted}</span>
        </p>
    );
};
