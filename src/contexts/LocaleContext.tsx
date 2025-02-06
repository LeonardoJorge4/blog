'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';

interface LocaleContextType {
  locale: string;
  country: string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en-US',
  country: 'US',
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState('en-US');
  const [country, setCountry] = useState('US');

  useEffect(() => {
    const localeFromCookie = getCookie('locale')?.toString() || 'en-US';
    const countryFromCookie = getCookie('country')?.toString() || 'US';
    setLocale(localeFromCookie);
    setCountry(countryFromCookie);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, country }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
