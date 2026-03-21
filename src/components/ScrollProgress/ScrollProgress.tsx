'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, pct)));
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className={styles.progressBar}>
            <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
