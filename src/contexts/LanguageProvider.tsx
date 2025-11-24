import { useEffect, useState } from 'react';
import { LanguageContext, type LanguageContextType } from './LanguageContext';
import pt from '../languages/pt';
import en from '../languages/en';
import fr from '../languages/fr';

type Language = LanguageContextType['language'];
type Translations = typeof pt;

const dictionaries: Record<Language, Translations> = {
  pt,
  en,
  fr,
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
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
    <LanguageContext.Provider value={{ language, translate, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
