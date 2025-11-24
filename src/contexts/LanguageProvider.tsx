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
    let current: any = dictionaries[language];

    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }

    return current;
  }

  return (
    <LanguageContext.Provider value={{ language, translate, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
