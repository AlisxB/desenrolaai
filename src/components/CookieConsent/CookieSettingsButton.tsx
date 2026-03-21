'use client';

import { useCookieContext } from './CookieContext';
import styles from './CookieSettingsButton.module.css';

export default function CookieSettingsButton() {
    const { openPreferences } = useCookieContext();

    return (
        <button
            type="button"
            className={styles.btn}
            onClick={openPreferences}
        >
            Configurar Cookies
        </button>
    );
}
