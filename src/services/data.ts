import { thumbs } from '../assets';

import type { Project } from '../interfaces/Project';

export const staticProjects: Project[] = [
  {
    id: 'admin-panel',
    stack: [
      'PostgreSQL',
      '.NET',
      'Entity Framework Core',
      'BCrypt',
      'JWT',
      'React',
      'TypeScript',
      'Material UI',
    ],
    repoLink: 'https://github.com/vanriwerson/admin-panel-boilerplate',
    thumb: thumbs.adminPanel,
  },
  {
    id: 'kipo-trumps',
    stack: ['HTML', 'CSS', 'JavaScript', 'Game Logic', 'AI (Rule-based)'],
    repoLink: 'https://github.com/vanriwerson/kipo-super-trumps',
    prodLink: 'https://vanriwerson.github.io/kipo-super-trumps/',
    thumb: thumbs.superTrumps,
  },
  {
    id: 'web-portfolio',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Internationalization',
      'CSS Architecture',
    ],
    repoLink: 'https://github.com/vanriwerson/web-portfolio',
    prodLink: 'https://vanriwerson.github.io/web-portfolio/',
    thumb: thumbs.webPortfolio,
  },
  {
    id: 'spent-a-lot',
    stack: ['React', 'TypeScript', 'Vite', 'PWA', 'CSS Architecture'],
    repoLink: 'https://github.com/vanriwerson/spent-a-lot',
    prodLink: 'https://vanriwerson.github.io/spent-a-lot/',
    thumb: thumbs.spentALot,
  },
];
