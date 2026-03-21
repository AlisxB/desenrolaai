'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface UseCountUpOptions {
    end: number;
    duration?: number;
    startOnView?: boolean;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

export function useCountUp({
    end,
    duration = 2000,
    startOnView = true,
    prefix = '',
    suffix = '',
    decimals = 0,
}: UseCountUpOptions) {
    const [display, setDisplay] = useState(`${prefix}0${suffix}`);
    const ref = useRef<HTMLElement | null>(null);
    const started = useRef(false);

    const startCount = useCallback(() => {
        const start = performance.now();
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

        const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOut(progress);
            const current = eased * end;
            setDisplay(`${prefix}${current.toFixed(decimals)}${suffix}`);

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }, [end, duration, prefix, suffix, decimals]);

    useEffect(() => {
        if (!startOnView) {
            startCount();
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    startCount();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [startOnView, startCount]);

    return { display, ref };
}
