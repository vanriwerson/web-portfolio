import { useLanguage } from '../../hooks';
import type { Language } from '../../interfaces';

// flag icons sourced from https://www.freeflagicons.com/
import { flags } from '../../assets';
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
        <img src={flags.pt} alt="Portuguese flag" />
      </button>

      <button
        className={`language-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleChangeLanguage('en')}
      >
        <img src={flags.en} alt="English flag" />
      </button>

      <button
        className={`language-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => handleChangeLanguage('fr')}
      >
        <img src={flags.fr} alt="French flag" />
      </button>
    </div>
  );
}
