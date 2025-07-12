import { useEffect, useState } from "react";

export const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => window.removeEventListener("scroll", updateScrollDirection);
    }, []);

    return scrollDirection;
};
