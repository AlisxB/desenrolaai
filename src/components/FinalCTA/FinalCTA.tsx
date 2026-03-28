'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './FinalCTA.module.css';

export default function FinalCTA() {
    return (
        <section className="section">
            <div className="container">
                <motion.div 
                    className={styles.ctaWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.ctaContent}>
                        <span className={styles.ctaLabel}>Pronto para transformar?</span>
                        <h2 className={styles.ctaTitle}>Vamos desenrolar seu negócio juntos</h2>
                        <p className={styles.ctaDesc}>
                            Agende uma conversa estratégica e descubra como a tecnologia pode 
                            parar de te dar dor de cabeça e começar a te dar lucro.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/contato" className={`btn btn-primary ${styles.ctaButton}`}>
                                Falar com especialista
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                        <p className={styles.ctaNote}>
                            Sem compromisso. Resposta em até 24h úteis.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
