import { useState } from 'react';
import type { Project } from '../../interfaces/Project';
import { useLanguage } from '../../hooks';
import './style.css';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { translate } = useLanguage();
  const [cardExpanded, setCardExpanded] = useState(false);

  const toggleCard = () => {
    setCardExpanded(!cardExpanded);
  };

  return (
    <article className="project-card">
      <div className="project-header">
        <div className="project-title" onClick={toggleCard}>
          <h3>{translate(`cards.${project.id}.title`)}</h3>
          <button className={`card-toggle ${cardExpanded ? 'expanded' : ''}`}>
            ▾
          </button>
        </div>

        <div className="project-thumb">
          <img
            src={project.thumb}
            alt={translate(`cards.${project.id}.title`)}
          />
        </div>
      </div>

      <div className={`project-body ${cardExpanded ? 'expanded' : ''}`}>
        <p className="project-description">
          {translate(`cards.${project.id}.description`)}
        </p>

        <ul className="project-stack">
          {project.stack.map((tech) => (
            <li key={tech} className="stack-item">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-actions">
          {project.prodLink && (
            <a
              href={project.prodLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}

          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
