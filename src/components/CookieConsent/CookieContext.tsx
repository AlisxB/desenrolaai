'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface CookieContextValue {
    showPreferences: boolean;
    openPreferences: () => void;
}

const CookieContext = createContext<CookieContextValue>({
    showPreferences: false,
    openPreferences: () => {},
});

export function CookieProvider({ children }: { children: ReactNode }) {
    const [showPreferences, setShowPreferences] = useState(false);

    const openPreferences = () => setShowPreferences(true);

    return (
        <CookieContext.Provider value={{ showPreferences, openPreferences }}>
            {children}
        </CookieContext.Provider>
    );
}

export function useCookieContext() {
    return useContext(CookieContext);
}
