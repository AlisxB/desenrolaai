'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Linkedin, Instagram } from 'lucide-react';
import styles from './ContactInfo.module.css';
import { LINKS } from '@/lib/links';

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
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                    <Linkedin size={18} />
                </a>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                    <Instagram size={18} />
                </a>
            </div>
        </div>
    );
}
