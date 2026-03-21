'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!visible) return null;

    return (
        <button
            className={styles.scrollBtn}
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
        >
            <ArrowUp size={20} strokeWidth={2.5} />
        </button>
    );
}
