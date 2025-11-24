import { navIcons } from '../assets';

type MenuUtem = {
  id: string;
  icon?: string;
};

export const menuItems: MenuUtem[] = [
  { id: 'home', icon: navIcons.home },
  { id: 'about', icon: navIcons.about },
  { id: 'skills', icon: navIcons.skills },
  { id: 'projects', icon: navIcons.projects },
];
