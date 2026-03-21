const CONSENT_KEY = 'cookie_consent_v1';

export type ConsentType = 'accepted' | 'rejected' | 'preferences';

export interface CookiePreferences {
    analytics: boolean;
    functional: boolean;
    marketing: boolean;
}

type StoredConsent =
    | ConsentType
    | CookiePreferences;

function parseStored(value: string | null): StoredConsent | null {
    if (!value) return null;
    try {
        const parsed = JSON.parse(value);
        if (parsed === 'accepted' || parsed === 'rejected') return parsed;
        if (
            typeof parsed === 'object' &&
            parsed !== null &&
            'analytics' in parsed
        ) {
            return parsed as CookiePreferences;
        }
    } catch {
        if (value === 'accepted' || value === 'rejected') return value;
    }
    return null;
}

export function hasConsent(): boolean {
    if (typeof window === 'undefined') return false;
    const stored = parseStored(localStorage.getItem(CONSENT_KEY));
    return stored !== null;
}

export function getConsentType(): ConsentType | null {
    const stored = parseStored(localStorage.getItem(CONSENT_KEY));
    if (stored === 'accepted' || stored === 'rejected') return stored;
    if (typeof stored === 'object') return 'preferences';
    return null;
}

export function getPreferences(): CookiePreferences {
    const stored = parseStored(localStorage.getItem(CONSENT_KEY));
    if (typeof stored === 'object' && stored !== null) {
        return {
            analytics: (stored as CookiePreferences).analytics ?? false,
            functional: (stored as CookiePreferences).functional ?? false,
            marketing: (stored as CookiePreferences).marketing ?? false,
        };
    }
    return { analytics: false, functional: false, marketing: false };
}

export function hasCategoryConsent(category: keyof CookiePreferences): boolean {
    const type = getConsentType();
    if (type === 'accepted') return true;
    if (type === 'rejected') return false;
    const prefs = getPreferences();
    return prefs[category] ?? false;
}

export function acceptAll(): void {
    localStorage.setItem(CONSENT_KEY, JSON.stringify('accepted'));
}

export function rejectAll(): void {
    localStorage.setItem(CONSENT_KEY, JSON.stringify('rejected'));
}

export function savePreferences(prefs: CookiePreferences): void {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(prefs));
}
