'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import styles from './AboutHero.module.css';

export default function AboutHero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <motion.div
                    className={styles.heroInner}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span className="tag">
                        <MapPin size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                        Fortaleza, Ceará
                    </span>
                    <h1 className={styles.heroTitle}>
                        Quem <span className={styles.accent}>somos</span>
                    </h1>
                    <p className={styles.heroDesc}>
                        A DesenrolaAI nasceu em 2022 com um propósito claro: descomplicar a tecnologia
                        para empresas brasileiras. Saímos de Fortaleza/CE com a missão de provar que
                        automação e inteligência artificial não precisam ser coisas de grandes corporações
                        — podem (e devem) estar ao alcance de qualquer negócio que queira crescer.
                    </p>
                </motion.div>
            </div>
            <div className={styles.heroGlow} />
        </section>
    );
}
