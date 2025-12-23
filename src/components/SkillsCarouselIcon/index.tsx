import { useLanguage } from '../../hooks';
import type { CarouselIcon } from '../../interfaces/CarouselIcon';
import './style.css';

type SkillsCarouselIconProps = {
  icon: CarouselIcon;
  className?: string;
};

export default function SkillsCarouselIcon({
  icon,
  className = '',
}: SkillsCarouselIconProps) {
  const { translate } = useLanguage();

  return (
    <a
      href={icon.doc}
      target="_blank"
      rel="noopener noreferrer"
      className="skill-icon-wrapper"
      aria-label={`${icon.alt} logo`}
      title={`${icon.alt}: ${translate(icon.summary)}`}
    >
      <img
        className={`skill-icon ${className}`}
        src={icon.src}
        alt={icon.alt}
      />
    </a>
  );
}
