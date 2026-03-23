'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import styles from './ContatoHero.module.css';

export default function ContatoHero() {
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
                        <MessageSquare size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                        Fale conosco
                    </span>
                    <h1 className={styles.title}>
                        Vamos conversar sobre o seu <span className={styles.accent}>projeto</span>
                    </h1>
                    <p className={styles.desc}>
                        Preencha o formulário e retornaremos em até 24h úteis.
                        Sem compromisso — queremos entender o seu desafio antes de qualquer coisa.
                    </p>
                </motion.div>
            </div>
            <div className={styles.glow} />
        </section>
    );
}
