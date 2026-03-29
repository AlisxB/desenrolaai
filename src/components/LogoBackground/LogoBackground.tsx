'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './LogoBackground.module.css';

interface LogoBackgroundProps {
    className?: string;
    size?: number;
    opacity?: number;
    position?: 'left' | 'right';
}

export default function LogoBackground({
    className = '',
    size = 600,
    opacity = 0.04,
    position = 'right',
}: LogoBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [opacity, 0]);
    const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <motion.div
            ref={containerRef}
            className={`${styles.logoBackground} ${styles[position]} ${className}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
                width: size,
                height: size,
                y: logoY,
                opacity: logoOpacity,
                scale: logoScale,
            }}
        >
            <Image
                src="/logo.png"
                alt=""
                fill
                sizes={`${size}px`}
                className={styles.logoImage}
            />
        </motion.div>
    );
}
