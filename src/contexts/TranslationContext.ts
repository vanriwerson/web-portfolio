import { createContext } from 'react';
import type { TranslationContextType } from '../interfaces';

export const TranslationContext = createContext<TranslationContextType>({
  language: 'pt',
  translate: () => '',
  setLanguage: () => {},
});
