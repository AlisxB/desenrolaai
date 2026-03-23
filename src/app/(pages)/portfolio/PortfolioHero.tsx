'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import styles from './PortfolioHero.module.css';

export default function PortfolioHero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <motion.div
                    className={styles.inner}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                >
                    <span className="tag">
                        <Trophy size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                        Nossos resultados
                    </span>
                    <h1 className={styles.title}>
                        Resultados <span className={styles.accent}>reais</span> de clientes reais
                    </h1>
                    <p className={styles.desc}>
                        Cada case representa um negócio transformado. Veja como empresas brasileiras
                        estão economizando tempo, aumentando faturamento e crescendo com tecnologia
                        — sem complicação.
                    </p>
                </motion.div>
            </div>
            <div className={styles.glow} />
        </section>
    );
}
