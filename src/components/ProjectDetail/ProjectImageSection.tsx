import type { ProjectImageSection as ImageSectionProps } from "../Projects/projectsData";
import "./ProjectImageSection.scss";

export const ProjectImageSection = ({
  title,
  titleGradient,
  layoutType,
  images,
  gridColumns = 2,
}: ImageSectionProps) => {
  const titleStyle = titleGradient
    ? {
        backgroundImage: titleGradient,
        backgroundClip: "text" as const,
        WebkitBackgroundClip: "text" as const,
        WebkitTextFillColor: "transparent" as const,
        color: "transparent",
      }
    : undefined;

  const renderImages = () => {
    if (layoutType === "grid") {
      const cols = gridColumns ?? 2;
      return (
        <div
          className="project-image-section__grid"
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="project-image-section__cell">
              <img
                src={img.src}
                alt={img.alt}
                className="project-image-section__img"
              />
            </div>
          ))}
        </div>
      );
    }

    if (layoutType === "fullWidthAndTwoHalves" && images.length >= 3) {
      const [full, ...halves] = images;
      return (
        <div className="project-image-section__full-two-halves">
          <div className="project-image-section__full">
            <img
              src={full.src}
              alt={full.alt}
              className="project-image-section__img"
            />
          </div>
          <div className="project-image-section__halves">
            {halves.slice(0, 2).map((img, index) => (
              <div key={index} className="project-image-section__cell">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="project-image-section__img"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="project-image-section__grid" style={{ gridTemplateColumns: "1fr" }}>
        {images.map((img, index) => (
          <div key={index} className="project-image-section__cell">
            <img
              src={img.src}
              alt={img.alt}
              className="project-image-section__img"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="project-image-section">
      <h2 className="project-image-section__title" style={titleStyle}>
        {title}
      </h2>
      <div className="project-image-section__container">{renderImages()}</div>
    </section>
  );
};

export default ProjectImageSection;
