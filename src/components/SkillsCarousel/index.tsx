import { useCarousel } from '../../hooks';
import { getCarouselIconClass } from '../../helpers';
import SkillsCarouselIcon from '../SkillsCarouselIcon';
import './style.css';

export default function SkillsCarousel() {
  const { visibleIcons, center, iconsPerPage, trackWidth, index } =
    useCarousel();

  return (
    <article className="carousel-container pattern">
      <div
        key={index}
        className="carousel-track"
        style={{ width: `${trackWidth}px` }}
      >
        {visibleIcons.map((icon, i) => (
          <SkillsCarouselIcon
            key={`${icon.id}-${index}`}
            icon={icon}
            className={getCarouselIconClass(i, center, iconsPerPage)}
          />
        ))}
      </div>
    </article>
  );
}
