'use client';

import { motion } from 'framer-motion';
import styles from './ContactMap.module.css';

export default function ContactMap() {
    return (
        <motion.div
            className={styles.mapWrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.267776!2d-38.5269773!3d-3.7179898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75abc77c8c0d1%3A0x5b1e7b3b6c8b8c0d!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                className={styles.map}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização DesenrolaAI"
            />
            <div className={styles.mapOverlay} />
            <div className={styles.mapPulse} />
        </motion.div>
    );
}
