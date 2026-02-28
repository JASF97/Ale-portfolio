import "./ProjectCard.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  link?: string;
  tags?: string[];
}

export const ProjectCard = ({
  title,
  description,
  imageSrc,
  imageAlt = "Project image",
  link = "#",
  tags = [],
}: ProjectCardProps) => {
  return (
    <article className="project-card">
      <div className="project-card__image-wrapper">
        <img src={imageSrc} alt={imageAlt} className="project-card__image" />
        <div className="project-card__overlay">
          <a
            href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="project-card__view"
          >
            {" "}
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
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Ver proyecto
          </a>
        </div>
      </div>

      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        {description && (
          <p className="project-card__description">{description}</p>
        )}

        <a
          href={`/projects/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="project-card__mobile-cta"
        >
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
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>

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
    </article>
  );
};

export default ProjectCard;
