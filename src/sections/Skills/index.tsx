import { SectionTitle } from '../../components';
import { useLanguage } from '../../hooks';

export default function SkillsSection() {
  const { translate } = useLanguage();

  const paragraphs = translate('skills.content').split(' \n ');

  return (
    <section id="skills">
      <SectionTitle title={translate('skills.title')} />

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
