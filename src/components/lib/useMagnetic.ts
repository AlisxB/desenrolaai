'use client';

import { useRef, useCallback, type RefObject } from 'react';

interface UseMagneticOptions {
    strength?: number;
    ease?: number;
}

export function useMagnetic<T extends HTMLElement>(
    { strength = 0.3, ease = 0.1 }: UseMagneticOptions = {}
): RefObject<T | null> {
    const ref = useRef<T | null>(null);
    const animFrame = useRef<number>(0);
    const currentX = useRef(0);
    const currentY = useRef(0);

    const animateBack = useCallback(() => {
        const el = ref.current;
        if (!el) return;

        const animate = () => {
            currentX.current *= 0.85;
            currentY.current *= 0.85;

            el.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`;

            if (Math.abs(currentX.current) > 0.1 || Math.abs(currentY.current) > 0.1) {
                animFrame.current = requestAnimationFrame(animate);
            } else {
                currentX.current = 0;
                currentY.current = 0;
                el.style.transform = 'translate(0, 0)';
            }
        };

        animFrame.current = requestAnimationFrame(animate);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        const maxDist = Math.max(rect.width, rect.height);

        if (distance > maxDist * 1.5) {
            animateBack();
            return;
        }

        cancelAnimationFrame(animFrame.current);

        const animate = () => {
            const targetX = distX * strength;
            const targetY = distY * strength;

            currentX.current += (targetX - currentX.current) * ease;
            currentY.current += (targetY - currentY.current) * ease;

            el.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`;

            if (Math.abs(targetX - currentX.current) > 0.1 || Math.abs(targetY - currentY.current) > 0.1) {
                animFrame.current = requestAnimationFrame(animate);
            }
        };

        animFrame.current = requestAnimationFrame(animate);
    }, [strength, ease, animateBack]);

    const handleMouseLeave = useCallback(() => {
        animateBack();
    }, [animateBack]);

    useCallback(() => {
        const el = ref.current;
        if (!el) return;
        el.addEventListener('mousemove', handleMouseMove as EventListener);
        el.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            el.removeEventListener('mousemove', handleMouseMove as EventListener);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    return ref;
}
