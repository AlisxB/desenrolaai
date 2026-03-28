'use client';

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface CookieContextValue {
    showPreferences: boolean;
    openPreferences: () => void;
    setShowPreferences: (value: boolean) => void;
}

const CookieContext = createContext<CookieContextValue>({
    showPreferences: false,
    openPreferences: () => {},
    setShowPreferences: () => {},
});

export function CookieProvider({ children }: { children: ReactNode }) {
    const [showPreferences, setShowPreferences] = useState(false);

    const openPreferences = useCallback(() => setShowPreferences(true), []);

    return (
        <CookieContext.Provider value={{ showPreferences, openPreferences, setShowPreferences }}>
            {children}
        </CookieContext.Provider>
    );
}

export function useCookieContext() {
    return useContext(CookieContext);
}
