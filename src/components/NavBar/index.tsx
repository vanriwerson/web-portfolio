import { useState } from 'react';
import { useLanguage } from '../../hooks';
import DrawerToggle from '../DrawerToggle';
import LanguageToggle from '../LanguageToggle';
import Logo from '../Logo';
import './style.css';

export default function NavBar() {
  const { translate } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <div className="nav-container pattern">
      <Logo />

      <nav className="links-container">
        <a href="#home" className="nav-link active">
          {translate('navbar.home')}
        </a>
        <a href="#about" className="nav-link">
          {translate('navbar.about')}
        </a>
        <a href="#skills" className="nav-link">
          {translate('navbar.skills')}
        </a>
        <a href="#projects" className="nav-link">
          {translate('navbar.projects')}
        </a>
        <a href="#contact" className="nav-link">
          {translate('navbar.contact')}
        </a>
      </nav>

      <LanguageToggle />

      <DrawerToggle drawerOpen={drawerOpen} onToggle={handleDrawerToggle} />
    </div>
  );
}
