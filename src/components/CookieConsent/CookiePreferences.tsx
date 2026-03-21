'use client';

import { useState } from 'react';
import { ShieldCheck, BarChart2, Settings2, Megaphone, X, ChevronDown } from 'lucide-react';
import styles from './CookiePreferences.module.css';
import {
    getPreferences,
    savePreferences,
    type CookiePreferences,
} from '@/lib/cookieConsent';
import { initAnalytics } from '@/lib/analytics';

interface CookiePreferencesProps {
    onSave: () => void;
    onClose: () => void;
}

const categories = [
    {
        key: 'functional' as const,
        label: 'Cookies Funcionais',
        icon: Settings2,
        description:
            'Lembram suas preferências, como idioma e configurações, para personalizar sua experiência na plataforma.',
    },
    {
        key: 'analytics' as const,
        label: 'Cookies Analíticos',
        icon: BarChart2,
        description:
            'Nos ajudam a entender como você usa a plataforma, identificar erros e melhorar continuamente nossos serviços. Utilizamos Google Analytics e Hotjar.',
    },
    {
        key: 'marketing' as const,
        label: 'Cookies de Marketing',
        icon: Megaphone,
        description:
            'Utilizados para exibir anúncios relevantes e medir a eficácia de campanhas. Utilizamos Google Ads e Meta Ads.',
    },
];

export default function CookiePreferences({ onSave, onClose }: CookiePreferencesProps) {
    const initial = getPreferences();
    const [prefs, setPrefs] = useState<CookiePreferences>(initial);
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggle = (key: keyof CookiePreferences) => {
        setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const handleSave = () => {
        savePreferences(prefs);
        initAnalytics();
        onSave();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.panel}>
                <div className={styles.header}>
                    <div className={styles.headerIcon}>
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <h2 className={styles.title}>Preferências de Cookies</h2>
                        <p className={styles.subtitle}>
                            Personalize quais cookies deseja ativar. Você pode alterar a qualquer momento.
                        </p>
                    </div>
                    <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Fechar">
                        <X size={18} />
                    </button>
                </div>

                <div className={styles.categories}>
                    {categories.map(({ key, label, icon: Icon, description }) => (
                        <div key={key} className={styles.category}>
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryLeft}>
                                    <div className={styles.categoryIcon}>
                                        <Icon size={16} />
                                    </div>
                                    <span className={styles.categoryLabel}>{label}</span>
                                </div>
                                <div className={styles.categoryRight}>
                                    <button
                                        type="button"
                                        className={`${styles.toggle} ${prefs[key] ? styles.toggleOn : ''}`}
                                        onClick={() => toggle(key)}
                                        role="switch"
                                        aria-checked={prefs[key]}
                                        aria-label={`${prefs[key] ? 'Desativar' : 'Ativar'} ${label}`}
                                    >
                                        <span className={styles.toggleKnob} />
                                    </button>
                                </div>
                            </div>
                            <button
                                type="button"
                                className={styles.expandBtn}
                                onClick={() => setExpanded(expanded === key ? null : key)}
                                aria-expanded={expanded === key}
                            >
                                Saber mais
                                <ChevronDown
                                    size={14}
                                    className={expanded === key ? styles.chevronOpen : ''}
                                />
                            </button>
                            {expanded === key && (
                                <p className={styles.description}>{description}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <p className={styles.note}>
                        Cookies essenciais são sempre ativos e não podem ser desativados.
                    </p>
                    <div className={styles.footerActions}>
                        <button type="button" className={styles.btnOutline} onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="button" className={styles.btnPrimary} onClick={handleSave}>
                            Salvar preferências
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
