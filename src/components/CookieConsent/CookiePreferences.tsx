'use client';

import { useState } from 'react';
import { ShieldCheck, BarChart2, Settings2, Megaphone, X, ChevronDown, Lock } from 'lucide-react';
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

type CategoryKey = keyof CookiePreferences;

interface Category {
    key: CategoryKey;
    label: string;
    icon: typeof Settings2;
    description: string;
    locked?: boolean;
}

const categories: Category[] = [
    {
        key: 'functional',
        label: 'Cookies Funcionais',
        icon: Settings2,
        locked: true,
        description:
            'Lembram suas preferências, como idioma e configurações, para personalizar sua experiência na plataforma. Necessários para o funcionamento da plataforma.',
    },
    {
        key: 'analytics',
        label: 'Cookies Analíticos',
        icon: BarChart2,
        description:
            'Nos ajudam a entender como você usa a plataforma, identificar erros e melhorar continuamente nossos serviços. Utilizamos Google Analytics e Hotjar.',
    },
    {
        key: 'marketing',
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

    const toggle = (key: CategoryKey) => {
        const cat = categories.find((c) => c.key === key);
        if (cat?.locked) return;
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
                    {categories.map((cat) => {
                        const { key, label, icon: Icon, description } = cat;
                        return (
                        <div key={key} className={styles.category}>
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryLeft}>
                                    <div className={styles.categoryIcon}>
                                        <Icon size={16} />
                                    </div>
                                    <span className={styles.categoryLabel}>{label}</span>
                                </div>
                                <div className={styles.categoryRight}>
                                    {cat.locked ? (
                                        <div className={styles.lockedBadge}>
                                            <Lock size={12} />
                                            <span>Obrigatório</span>
                                        </div>
                                    ) : (
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
                                    )}
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
                        );
                    })}
                </div>

                <div className={styles.footer}>
                    <p className={styles.note}>
                        Cookies essenciais e funcionais são sempre ativos e não podem ser desativados.
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
