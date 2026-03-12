import "./ProjectCard.scss";
import { Link } from "react-router-dom";

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
  return (
    <Link to={`/project/${slug}`} className="project-card">
      <div className="project-card__image-wrapper">
        <img src={imageSrc} alt={imageAlt} className="project-card__image" />
        <div className="project-card__overlay">
          <span className="project-card__view">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ver proyecto
          </span>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        {description && (
          <p className="project-card__description">{description}</p>
        )}

        <span className="project-card__mobile-cta">
          Ver proyecto
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7V15"
              stroke="#1F1F3A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        {tags.length > 0 && (
          <div className="project-card__tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-card__tag">
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
