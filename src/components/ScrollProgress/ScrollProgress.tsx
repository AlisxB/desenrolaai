'use client';

import { useEffect, useState } from 'react';
import styles from './ScrollProgress.module.css';
import { onLenisScroll } from '../SmoothScroll/SmoothScroll';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = (scrollPos: number) => {
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const pct = docHeight > 0 ? (scrollPos / docHeight) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, pct)));
        };

        const unsubscribe = onLenisScroll(updateProgress);
        return unsubscribe;
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
