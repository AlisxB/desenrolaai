import { hasCategoryConsent } from './cookieConsent';

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        fbq?: (...args: unknown[]) => void;
        hotjar?: (...args: unknown[]) => void;
    }
}

export function initAnalytics(): void {
    if (typeof window === 'undefined') return;

    if (hasCategoryConsent('analytics')) {
        initGoogleAnalytics();
        initHotjar();
    }

    if (hasCategoryConsent('marketing')) {
        initMetaPixel();
        initGoogleAds();
    }
}

export function initGoogleAnalytics(measurementId?: string): void {
    if (!measurementId) return;
    window.gtag =
        window.gtag ||
        function (...args: unknown[]) {
            window.gtag!.call(window, ...args);
        };
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
}

export function initHotjar(siteId?: string): void {
    if (!siteId) return;
    window.hotjar = window.hotjar || function (...args: unknown[]) {
        window.hotjar!.call(window, ...args);
    };
    (window.hotjar as (q: string, sid: string) => void)('hj', siteId);
}

export function initMetaPixel(pixelId?: string): void {
    if (!pixelId) return;
    window.fbq =
        window.fbq ||
        function (...args: unknown[]) {
            const n = window.fbq;
            if (typeof n === 'function') n.call(window, ...args);
        };
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');
}

export function initGoogleAds(conversionId?: string): void {
    if (!conversionId) return;
    const gads = document.createElement('script');
    gads.async = true;
    gads.src = `https://www.googleadservices.com/pagead/conversion_async.js?id=${conversionId}`;
    document.head.appendChild(gads);
}

export function trackEvent(
    eventName: string,
    params?: Record<string, string | number | boolean>
): void {
    if (typeof window === 'undefined') return;

    if (hasCategoryConsent('analytics') && window.gtag) {
        window.gtag('event', eventName, params);
    }

    if (hasCategoryConsent('marketing') && window.fbq) {
        window.fbq('trackCustom', eventName, params);
    }
}
