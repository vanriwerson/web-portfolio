import type { Language } from './Language';

export type TranslationContextType = {
  language: Language;
  translate: (path: string) => string;
  setLanguage: (lang: Language) => void;
};
