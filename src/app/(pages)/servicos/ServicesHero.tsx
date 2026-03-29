'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import LogoBackground from '@/components/LogoBackground/LogoBackground';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
    return (
        <section className={styles.hero}>
            <LogoBackground />
            <div className="container">
                <motion.div
                    className={styles.inner}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span className="tag">
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                        Nossos serviços
                    </span>
                    <h1 className={styles.title}>
                        Soluções sob medida para o <span className={styles.accent}>seu negócio</span>
                    </h1>
                    <p className={styles.desc}>
                        Não vendemos produtos genéricos. Cada projeto é desenhado do zero para resolver
                        um problema real — com inteligência artificial, automação e tecnologia que
                        gera resultado mensurável.
                    </p>
                    <Link href="/contato" className={`btn btn-primary ${styles.cta}`}>
                        Solicite um diagnóstico gratuito
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>
            </div>
            <div className={styles.glow} />
        </section>
    );
}
