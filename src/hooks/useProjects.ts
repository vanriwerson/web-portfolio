import { useEffect, useState } from 'react';
import { fetchRepo, staticProjects } from '../services';
import type { Project } from '../interfaces';

const REPOS_OWNER = 'vanriwerson';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const enrichedProjects = await Promise.all(
          staticProjects.map(async (project) => {
            try {
              const repoName = project.repoLink.split('/').pop();
              if (!repoName) return project;

              const github = await fetchRepo(REPOS_OWNER, repoName);

              return {
                ...project,
                github,
              };
            } catch {
              // fallback para dados estáticos (API offline, rate limit etc.)
              return project;
            }
          })
        );

        setProjects(enrichedProjects);
      } catch {
        setError('Erro ao carregar projetos');
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  return { projects, loading, error };
}
