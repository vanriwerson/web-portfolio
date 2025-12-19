export interface Project {
  id: string;
  stack: string[];
  prodLink?: string;
  repoLink: string;
  thumb: string;
}

export interface ProjectCardTranslation {
  title: string;
  description: string;
}
