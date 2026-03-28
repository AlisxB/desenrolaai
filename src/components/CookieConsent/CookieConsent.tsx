'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Cookie } from 'lucide-react';
import styles from './CookieConsent.module.css';
import CookiePreferences from './CookiePreferences';
import {
    hasConsent,
    acceptAll,
    rejectAll,
} from '@/lib/cookieConsent';
import { initAnalytics } from '@/lib/analytics';
import { useCookieContext } from './CookieContext';

export default function CookieConsent() {
    const { showPreferences, setShowPreferences } = useCookieContext();
    const [bannerVisible, setBannerVisible] = useState(false);
    const wasBannerVisibleRef = useRef(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasConsent()) {
                setBannerVisible(true);
            } else {
                initAnalytics();
            }
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    const handleAcceptAll = () => {
        acceptAll();
        setBannerVisible(false);
        initAnalytics();
    };

    const handleRejectAll = () => {
        rejectAll();
        setBannerVisible(false);
    };

    const handleOpenPreferences = () => {
        wasBannerVisibleRef.current = bannerVisible;
        setShowPreferences(true);
        setBannerVisible(false);
    };

    const handleClosePreferences = () => {
        setShowPreferences(false);
        if (wasBannerVisibleRef.current) {
            setBannerVisible(true);
        }
    };

    const handleSavePreferences = () => {
        setShowPreferences(false);
    };

    if (showPreferences) {
        return (
            <CookiePreferences
                onSave={handleSavePreferences}
                onClose={handleClosePreferences}
            />
        );
    }

    if (!bannerVisible) return null;

    return (
        <div className={styles.banner} role="dialog" aria-label="Consentimento de cookies">
            <div className={styles.icon}>
                <Cookie size={20} />
            </div>
            <div className={styles.text}>
                <p>
                    Utilizamos cookies para melhorar sua experiência. Ao continuar navegando,
                    você aceita nossa{' '}
                    <a href="/politica-de-privacidade#cookies">Política de Privacidade</a>.
                </p>
            </div>
            <div className={styles.actions}>
                <button
                    type="button"
                    className={styles.btnOutline}
                    onClick={handleRejectAll}
                >
                    Rejeitar todos
                </button>
                <button
                    type="button"
                    className={styles.btnGhost}
                    onClick={handleOpenPreferences}
                >
                    Gerenciar
                </button>
                <button
                    type="button"
                    className={styles.btnPrimary}
                    onClick={handleAcceptAll}
                >
                    Aceitar todos
                </button>
            </div>
            <button
                type="button"
                className={styles.close}
                onClick={handleRejectAll}
                aria-label="Fechar"
            >
                <X size={16} />
            </button>
        </div>
    );
}
