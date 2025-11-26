import { SectionTitle } from '../../components';
import { useLanguage } from '../../hooks';
import './style.css';

export default function AboutSection() {
  const { translate } = useLanguage();

  const paragraphs = translate('about.content').split(' \n ');

  return (
    <section id="about" className="about-section">
      <SectionTitle title={translate('about.title')} />

      <div className="about-content">
        {paragraphs.map((text, index) => (
          <p key={index} className="about-paragraph">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
