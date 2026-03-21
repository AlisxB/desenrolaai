'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Tempus from 'tempus';

type ScrollCallback = (scroll: number) => void;

const scrollCallbacks: ScrollCallback[] = [];

export const onLenisScroll = (callback: ScrollCallback): (() => void) => {
    scrollCallbacks.push(callback);
    return () => {
        const index = scrollCallbacks.indexOf(callback);
        if (index > -1) scrollCallbacks.splice(index, 1);
    };
};

export default function SmoothScroll() {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        lenis.on('scroll', ({ scroll }: { scroll: number }) => {
            scrollCallbacks.forEach((cb) => cb(scroll));
        });

        const unsubscribe = Tempus.add((time: number) => {
            lenis.raf(time);
        });

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
                e.preventDefault();
                const id = anchor.getAttribute('href')?.substring(1);
                if (id) {
                    const element = document.getElementById(id);
                    if (element) {
                        lenis.scrollTo(element, { offset: -80 });
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            unsubscribe?.();
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return null;
}
