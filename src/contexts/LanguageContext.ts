import { createContext } from 'react';

type Language = 'pt' | 'en' | 'fr';

export type LanguageContextType = {
  language: Language;
  translate: (path: string) => string;
  setLanguage: (lang: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  translate: () => '',
  setLanguage: () => {},
});
