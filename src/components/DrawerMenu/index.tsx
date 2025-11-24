import NavigationLinks from '../NavigationLinks';
import './style.css';

type DrawerMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function DrawerMenu({ open, onClose }: DrawerMenuProps) {
  return (
    <div className={`drawer-menu ${open ? 'open' : ''}`} onClick={onClose}>
      <NavigationLinks
        showIcons={true}
        className="drawer-links"
        onNavigate={onClose}
      />
    </div>
  );
}
