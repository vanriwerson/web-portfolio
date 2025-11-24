import { useLanguage } from '../../hooks';
import type { Language } from '../../contexts';
import './style.css';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="language-container">
      <button
        className={`language-btn ${language === 'pt' ? 'active' : ''}`}
        onClick={() => handleChangeLanguage('pt')}
      >
        PT
      </button>

      <button
        className={`language-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleChangeLanguage('en')}
      >
        EN
      </button>

      <button
        className={`language-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => handleChangeLanguage('fr')}
      >
        FR
      </button>
    </div>
  );
}
