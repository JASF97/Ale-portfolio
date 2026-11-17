import "./ProjectCard.scss";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/useLanguage";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  tags?: string[];
}

export const ProjectCard = ({
  slug,
  title,
  description,
  imageSrc,
  imageAlt = "Project image",
  tags = [],
}: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <Link to={`/project/${slug}`} className="project-card">
      <div className="project-card__image-wrapper">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="project-card__image"
          loading="lazy"
          decoding="async"
        />
        <div className="project-card__overlay">
          <span className="project-card__view" aria-hidden="true">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.projects.view}
          </span>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        {description && (
          <p className="project-card__description">{description}</p>
        )}

        <span className="project-card__mobile-cta">
          {t.projects.view}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((tag) => (
              <span key={tag} className="project-card__tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectCard;
