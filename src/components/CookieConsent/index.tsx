'use client';

import { CookieProvider } from './CookieContext';
import CookieConsent from './CookieConsent';

export default function CookieConsentWrapper() {
    return (
        <CookieProvider>
            <CookieConsent />
        </CookieProvider>
    );
}
