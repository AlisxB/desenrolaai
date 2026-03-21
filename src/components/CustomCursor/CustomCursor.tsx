'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let animFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        const animate = () => {
            const ease = 0.12;
            cursorX += (mouseX - cursorX) * ease;
            cursorY += (mouseY - cursorY) * ease;

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

            animFrameId = requestAnimationFrame(animate);
        };

        const checkHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');
            setIsHovering(!!interactive);
        };

        const smoothAnimate = () => {
            animate();
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousemove', checkHover);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        animFrameId = requestAnimationFrame(smoothAnimate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousemove', checkHover);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(animFrameId);
        };
    }, [isVisible]);

    return (
        <>
            <div
                ref={cursorRef}
                className={`${styles.cursor} ${isHovering ? styles.hovering : ''} ${isVisible ? styles.visible : ''}`}
            />
            <div
                ref={cursorDotRef}
                className={`${styles.cursorDot} ${isVisible ? styles.visible : ''}`}
            />
        </>
    );
}
