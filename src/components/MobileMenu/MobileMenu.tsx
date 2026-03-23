'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Users, Zap, Briefcase, Info, ArrowRight } from 'lucide-react';
import styles from './MobileMenu.module.css';

interface NavItem {
    href: string;
    label: string;
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems?: NavItem[];
    ctaHref?: string;
    ctaLabel?: string;
}

const defaultNavItems: NavItem[] = [
    { href: '/servicos', label: 'Soluções' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/sobre', label: 'Sobre' },
];

const iconMap: Record<string, typeof Users> = {
    '/servicos': Zap,
    '/portfolio': Briefcase,
    '/sobre': Info,
    '#fundadores': Users,
    '#solucoes': Zap,
    '#diferenciais': Zap,
    '#resultados': Users,
};

export default function MobileMenu({
    isOpen,
    onClose,
    navItems = defaultNavItems,
    ctaHref = '/contato',
    ctaLabel = 'Fale Conosco',
}: MobileMenuProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
            <div className={styles.backdrop} onClick={onClose} />
            <div className={styles.drawer} role="dialog" aria-label="Menu de navegação">
                <div className={styles.drawerHeader}>
                    <span className={styles.logo}>Desenrola<span>AI</span></span>
                    <button className={styles.closeBtn} onClick={onClose} aria-label="Fechar menu">
                        <X size={20} />
                    </button>
                </div>
                <nav className={styles.navLinks}>
                    {navItems.map(({ href, label }) => {
                        const Icon = iconMap[href] || Zap;
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={styles.navLink}
                                onClick={onClose}
                            >
                                <Icon size={18} strokeWidth={2} />
                                {label}
                            </Link>
                        );
                    })}
                </nav>
                <div className={styles.ctaWrapper}>
                    <Link href={ctaHref} className={`btn btn-primary ${styles.cta}`} onClick={onClose}>
                        {ctaLabel}
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
