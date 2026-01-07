import { ProjectCard, SectionTitle } from '../../components';
import { useLanguage } from '../../hooks';
import { useProjects } from '../../hooks/useProjects';
import './style.css';

export default function ProjectsSection() {
  const { translate } = useLanguage();
  const { projects, loading, error } = useProjects();

  const paragraphs = translate('projects.content').split(' \n ');

  return (
    <section>
      <SectionTitle title={translate('projects.title')} />

      <div className="txt-wrapper">
        {paragraphs.map((text, index) => (
          <p key={index} className="txt-content">
            {text}
          </p>
        ))}
      </div>

      {loading && <p>Carregando projetos...</p>}
      {error && <p>{error}</p>}

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
