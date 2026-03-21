'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Users, Zap, BarChart3, Star, BookOpen } from 'lucide-react';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: '#fundadores', label: 'Fundadores', icon: Users },
  { href: '#solucoes', label: 'Soluções', icon: Zap },
  { href: '#diferenciais', label: 'Diferenciais', icon: BarChart3 },
  { href: '#resultados', label: 'Resultados', icon: Star },
  { href: '/blog', label: 'Blog', icon: BookOpen },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
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
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={styles.navLink}
              onClick={onClose}
            >
              <Icon size={18} strokeWidth={2} />
              {label}
            </Link>
          ))}
        </nav>
        <div className={styles.ctaWrapper}>
          <Link href="#contato" className={`btn btn-primary ${styles.cta}`} onClick={onClose}>
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  );
}
