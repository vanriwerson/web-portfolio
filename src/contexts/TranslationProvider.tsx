import { useEffect, useState } from 'react';
import type { Language } from '../interfaces';
import { pt, en, fr } from '../translations';
import { TranslationContext } from './TranslationContext';

const dictionaries: Record<Language, unknown> = {
  pt,
  en,
  fr,
};

export default function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language) || 'pt';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  function translate(path: string): string {
    const keys = path.split('.');
    let current: unknown = dictionaries[language];

    for (const key of keys) {
      if (typeof current === 'object' && current !== null && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        return path;
      }
    }

    return typeof current === 'string' ? current : path;
  }

  return (
    <TranslationContext.Provider value={{ language, translate, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
}
