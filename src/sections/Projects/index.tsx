import { ProjectCard, SectionTitle } from '../../components';
import { useLanguage } from '../../hooks';
import { staticProjects } from '../../services/data';
import './style.css';

export default function ProjectsSection() {
  const { translate } = useLanguage();

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

      <div className="projects-grid">
        {staticProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
