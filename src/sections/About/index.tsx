import { useLanguage } from '../../hooks';
import './style.css';

export default function AboutSection() {
  const { translate } = useLanguage();

  const paragraphs = translate('about.content').split(' \n ');

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">{translate('about.title')}</h2>

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
