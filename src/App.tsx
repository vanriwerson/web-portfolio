import { useState } from 'react';
import { DrawerMenu, NavBar } from './components';
import { LanguageProvider } from './contexts';
import './styles/globals.css';
import './styles/utilities.css';
import { HomeSection } from './sections';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <LanguageProvider>
      <NavBar drawerOpen={drawerOpen} onToggle={handleDrawerToggle} />

      <DrawerMenu open={drawerOpen} onClose={handleDrawerClose} />

      <HomeSection />
    </LanguageProvider>
  );
}
