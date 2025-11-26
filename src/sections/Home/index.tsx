import { SectionTitle } from '../../components';
import { useLanguage } from '../../hooks';
import './style.css';

export default function HomeSection() {
  const { translate } = useLanguage();

  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <SectionTitle title={translate('home.title')} />

        <p className="home-subtitle">{translate('home.subtitle')}</p>

        <button
          className="home-cta"
          onClick={() => document.querySelector('#projects')?.scrollIntoView()}
        >
          {translate('home.cta')}
        </button>
      </div>
    </section>
  );
}
