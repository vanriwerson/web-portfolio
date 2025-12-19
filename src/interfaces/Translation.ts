import type { ProjectCardTranslation } from './Project';

export interface Translation {
  navbar: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  skills: {
    title: string;
    content: string;
  };
  projects: {
    title: string;
    content: string;
  };
  cards: Record<string, ProjectCardTranslation>;
}
