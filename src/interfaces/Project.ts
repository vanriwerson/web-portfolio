import type { GithubRepo } from './GithubRepo';

export interface Project {
  id: string;
  stack: string[];
  prodLink?: string;
  repoLink: string;
  thumb: string;

  github?: GithubRepo;
}

export interface ProjectCardTranslation {
  title: string;
  description: string;
}
