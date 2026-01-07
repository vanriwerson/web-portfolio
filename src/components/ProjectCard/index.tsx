import { useState } from 'react';
import type { Project } from '../../interfaces';
import { useLanguage } from '../../hooks';
import './style.css';
import SocialNetworkButton from '../SocialNetworkButton';
import { socialNetworks } from '../../assets';

type ProjectCardProps = {
  project: Project;
};

const MIN_COUNT_TO_SHOW = 3;

export default function ProjectCard({ project }: ProjectCardProps) {
  const { translate } = useLanguage();
  const [cardExpanded, setCardExpanded] = useState(false);

  const showMeta = (meta: number): boolean => {
    return meta >= MIN_COUNT_TO_SHOW;
  };

  return (
    <article className="project-card">
      <div className="project-header">
        <div
          className="project-title"
          onClick={() => setCardExpanded((prev) => !prev)}
        >
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

        {project.github && (
          <div className="project-meta">
            {showMeta(project.github.stargazers_count) && (
              <span title="Stars">⭐ {project.github.stargazers_count}</span>
            )}
            {showMeta(project.github.forks_count) && (
              <span title="Forks">🍴 {project.github.forks_count}</span>
            )}
          </div>
        )}

        <ul className="project-stack">
          {project.stack.map((tech) => (
            <li key={tech} className="stack-item">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-actions">
          <SocialNetworkButton
            anchorLink={project.repoLink}
            imageSource={socialNetworks.github}
            altText="Github Repo"
            title="Github Repo"
          />

          {project.prodLink && (
            <SocialNetworkButton
              anchorLink={project.prodLink}
              imageSource={socialNetworks.liveDemo}
              altText="Live Demo"
              title="Live Demo"
            />
          )}
        </div>
      </div>
    </article>
  );
}
