import DrawerToggle from '../DrawerToggle';
import LanguageToggle from '../LanguageToggle';
import Logo from '../Logo';
import NavigationLinks from '../NavigationLinks';
import './style.css';

interface NavBarProps {
  drawerOpen: boolean;
  onToggle: () => void;
}

export default function NavBar({ drawerOpen, onToggle }: NavBarProps) {
  return (
    <div className="nav-container pattern">
      <Logo />

      <NavigationLinks className="bar-links" />

      <LanguageToggle />

      <DrawerToggle drawerOpen={drawerOpen} onToggle={onToggle} />
    </div>
  );
}
