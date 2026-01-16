import { useEffect, useRef, useState } from 'react';
export const useScrollingUp = (initialState = false) => {
    if (typeof window === 'undefined')
        return initialState;
    const [scrollingUp, setScrollingUp] = useState(initialState);
    const prevScroll = useRef(window.scrollY);
    useEffect(() => {
        const handleScroll = () => {
            const currScroll = window.pageYOffset;
            const isScrolled = prevScroll.current > currScroll;
            setScrollingUp(isScrolled);
            prevScroll.current = currScroll;
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return scrollingUp;
};
