import { menuItems } from '../../helpers';
import { useLanguage } from '../../hooks';
import './style.css';

type NavigationLinksProps = {
  showIcons?: boolean;
  onNavigate?: () => void;
  className?: string;
};

export default function NavigationLinks({
  showIcons = false,
  onNavigate,
  className = '',
}: NavigationLinksProps) {
  const { translate } = useLanguage();

  return (
    <nav className={className}>
      {menuItems.map(({ id, icon }) => (
        <a key={id} href={`#${id}`} className="nav-link" onClick={onNavigate}>
          {showIcons && icon && (
            <img src={icon} alt={id} className="nav-icon" />
          )}

          {translate(`navbar.${id}`)}
        </a>
      ))}
    </nav>
  );
}
