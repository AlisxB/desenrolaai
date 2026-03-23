'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import MobileMenu from '@/components/MobileMenu/MobileMenu';

const navItems = [
    { href: '#fundadores', label: 'Fundadores' },
    { href: '/servicos', label: 'Soluções' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/sobre', label: 'Sobre' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
                <div className="container">
                    <Link href="/" className={styles.logo}>
                        Desenrola<span>AI</span>
                    </Link>
                    <div className={styles.navLinks}>
                        {navItems.map(({ href, label }) => (
                            <Link key={href} href={href} className={styles.navLink}>
                                <span className={styles.navLinkText}>{label}</span>
                                <svg
                                    className={styles.navLinkUnderline}
                                    viewBox="0 0 100 2"
                                    preserveAspectRatio="none"
                                    aria-hidden="true"
                                >
                                    <motion.path
                                        d="M0,1 L100,1"
                                        stroke="var(--accent-blue)"
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        whileHover={{ pathLength: 1 }}
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                    />
                                </svg>
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/contato"
                        className={`btn btn-primary ${styles.navCta}`}
                        data-cursor="pointer"
                    >
                        Fale Conosco
                    </Link>
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(true)}
                        aria-label="Abrir menu"
                        aria-expanded={menuOpen}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>
            <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} navItems={navItems} ctaHref="/contato" ctaLabel="Fale Conosco" />
        </>
    );
}
