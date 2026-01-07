const BASE_URL = 'https://api.github.com';

export async function fetchRepo(owner: string, repo: string) {
  const response = await fetch(`${BASE_URL}/repos/${owner}/${repo}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar repositório no GitHub');
  }

  return response.json();
}
