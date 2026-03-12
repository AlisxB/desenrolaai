'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
            <div className="container">
                <Link href="/" className={styles.logo}>
                    Desenrola<span>AI</span>
                </Link>
                <div className={styles.navLinks}>
                    <Link href="#solucoes" className={styles.navLink}>Soluções</Link>
                    <Link href="#diferenciais" className={styles.navLink}>Diferenciais</Link>
                    <Link href="#resultados" className={styles.navLink}>Resultados</Link>
                    <Link href="/blog" className={styles.navLink}>Blog</Link>
                </div>
                <Link href="#contato" className="btn btn-primary">
                    Fale Conosco
                </Link>
            </div>
        </nav>
    );
}
