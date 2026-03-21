'use client';

import { useEffect, useState } from 'react';
import styles from './LegalLayout.module.css';

interface Section {
    id: string;
    title: string;
}

interface LegalLayoutProps {
    children: React.ReactNode;
    title: string;
    lastUpdated: string;
    sections: Section[];
}

export default function LegalLayout({ children, title, lastUpdated, sections }: LegalLayoutProps) {
    const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (!el) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveId(section.id);
                        }
                    });
                },
                { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, [sections]);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - 96;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <main className={styles.main}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.lastUpdated}>Última atualização: {lastUpdated}</p>
                </header>
                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <nav aria-label="Sumário da página">
                            <p className={styles.navTitle}>Sumário</p>
                            <ul className={styles.navList}>
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            type="button"
                                            onClick={() => scrollTo(section.id)}
                                            className={`${styles.navLink} ${activeId === section.id ? styles.active : ''}`}
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </aside>
                    <article className={styles.content}>{children}</article>
                </div>
            </div>
        </main>
    );
}
