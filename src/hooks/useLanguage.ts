import { useContext } from 'react';
import { TranslationContext } from '../contexts/TranslationContext';

export function useLanguage() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error('useLanguage deve ser usado em um <TranslationProvider>');
  }

  return context;
}
