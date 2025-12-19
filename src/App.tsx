import { useState } from 'react';
import { DrawerMenu, NavBar, SectionDivider } from './components';
import { TranslationProvider } from './contexts';
import './styles/globals.css';
import './styles/utilities.css';
import {
  AboutSection,
  HomeSection,
  ProjectsSection,
  SkillsSection,
} from './sections';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleCloseDrawer = () => setDrawerOpen(false);

  return (
    <TranslationProvider>
      <NavBar drawerOpen={drawerOpen} onToggle={handleDrawerToggle} />

      <DrawerMenu open={drawerOpen} onClose={handleCloseDrawer} />

      <main>
        <SectionDivider anchorRef="home" />
        <HomeSection />

        <SectionDivider anchorRef="about" />
        <AboutSection />

        <SectionDivider anchorRef="skills" />
        <SkillsSection />

        <SectionDivider anchorRef="projects" />
        <ProjectsSection />
      </main>
    </TranslationProvider>
  );
}
