'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Linkedin, Instagram } from 'lucide-react';
import styles from './ContactInfo.module.css';

const contactData = [
    {
        icon: MapPin,
        label: 'Endereço',
        value: 'Fortaleza, Ceará — Brasil',
        sub: 'Atendimento remoto para todo o Brasil',
    },
    {
        icon: Mail,
        label: 'E-mail',
        value: 'contato@desenrola.ai',
        sub: 'Resposta em até 24h úteis',
    },
    {
        icon: Phone,
        label: 'WhatsApp',
        value: '+55 (85) 99999-9999',
        sub: 'Seg a Sex, 8h às 18h',
    },
    {
        icon: Clock,
        label: 'Horário',
        value: 'Seg a Sex: 8h às 18h',
        sub: 'Sáb: 9h às 13h (plantão)',
    },
];

export default function ContactInfo() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                {contactData.map((item, i) => (
                    <motion.div
                        key={item.label}
                        className={styles.item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className={styles.iconWrapper}>
                            <item.icon size={20} />
                        </div>
                        <div>
                            <div className={styles.label}>{item.label}</div>
                            <div className={styles.value}>{item.value}</div>
                            <div className={styles.sub}>{item.sub}</div>
                        </div>
                    </motion.div>
                ))}

                <div className={styles.social}>
                    <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" className={styles.socialLink} aria-label="Instagram">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>

            <div className={styles.mapWrapper}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.267776!2d-38.5269773!3d-3.7179898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75abc77c8c0d1%3A0x5b1e7b3b6c8b8c0d!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                    className={styles.map}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização DesenrolaAI"
                />
                <div className={styles.mapOverlay} />
            </div>
        </div>
    );
}
