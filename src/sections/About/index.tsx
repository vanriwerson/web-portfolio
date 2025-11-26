import { SectionTitle } from '../../components';
import { useLanguage } from '../../hooks';

export default function AboutSection() {
  const { translate } = useLanguage();

  const paragraphs = translate('about.content').split(' \n ');

  return (
    <section id="about">
      <SectionTitle title={translate('about.title')} />

      <div className="txt-wrapper">
        {paragraphs.map((text, index) => (
          <p key={index} className="txt-content">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
