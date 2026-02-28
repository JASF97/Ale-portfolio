import "./ProjectDetail.scss";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../Projects/projectsData";
import ProjectCard from "../ProjectCard";
// import ProjectImageSection from "./ProjectImageSection";

import bimbo1 from "../../assets/bimbo-1.png";
import bimbo2 from "../../assets/bimbo-2.png";
import bimbo3 from "../../assets/bimbo-3.png";
import player1 from "../../assets/player-1.png";
import player2 from "../../assets/player-2.png";
import player3 from "../../assets/player-3.png";
import adelantto1 from "../../assets/adelantto-1.png";
import adelantto2 from "../../assets/adelantto-2.png";
import adelantto3 from "../../assets/adelantto-3.png";
import michi1 from "../../assets/michi-1.png";
import michi2 from "../../assets/michi-2.png";
import michi3 from "../../assets/michi-3.png";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="project-detail">
        <div className="project-detail__container">
          <section className="project-detail__header">
            <Link to="/" className="project-detail__back">
              ← Volver
            </Link>
            <h1 className="project-detail__title">Proyecto no encontrado</h1>
            <p className="project-detail__description">
              El proyecto que intentas ver no existe.
            </p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="project-detail">
      <div className="project-detail__container">
        {/* Header del proyecto */}
        <section
          className="project-detail__header"
          style={
            project.headerBackground
              ? { background: project.headerBackground }
              : undefined
          }
        >
          <div className="project-detail__header-inner">
            <Link to="/" className="project-detail__back">
              ← Volver al inicio
            </Link>

            {project.creatorTags && project.creatorTags.length > 0 && (
              <div className="project-detail__pills">
                {project.creatorTags.map((tag, index) => (
                  <Fragment key={index}>
                    {index > 0 && (
                      <span className="project-detail__pill-sep" aria-hidden>
                        ◆
                      </span>
                    )}
                    <span className="project-detail__pill">{tag}</span>
                  </Fragment>
                ))}
              </div>
            )}

            <div className="project-detail__header-grid">
              {/* Izquierda: creadora, nombre, descripción, meta */}
              <div className="project-detail__header-left">
                <h1 className="project-detail__header-title">
                  {project.title.toUpperCase()}
                </h1>
                <div className="project-detail__header-block">
                  <h2 className="project-detail__header-label">DESCRIPCIÓN</h2>
                  <p className="project-detail__header-text">
                    {project.descriptionLong ?? project.description}
                  </p>
                </div>
                {project.meta && (
                  <div className="project-detail__header-block">
                    <h2 className="project-detail__header-label">META</h2>
                    <p className="project-detail__header-text">
                      {project.meta}
                    </p>
                  </div>
                )}
              </div>

              {/* Derecha: cliente, tipo, software, logo */}
              <div className="project-detail__header-right">
                <div className="project-detail__meta-list">
                  {project.client && (
                    <div className="project-detail__meta-row">
                      <span className="project-detail__meta-label">
                        CLIENTE
                      </span>
                      <span className="project-detail__meta-value">
                        {project.client}
                      </span>
                    </div>
                  )}
                  {project.type && (
                    <div className="project-detail__meta-row">
                      <span className="project-detail__meta-label">TIPO</span>
                      <span className="project-detail__meta-value">
                        {project.type}
                      </span>
                    </div>
                  )}
                  {project.software && (
                    <div className="project-detail__meta-row">
                      <span className="project-detail__meta-label">
                        SOFTWARE
                      </span>
                      <span className="project-detail__meta-value">
                        {project.software}
                      </span>
                    </div>
                  )}
                </div>
                <div className="project-detail__logo-card">
                  {project.logoSrc ? (
                    <img
                      src={project.logoSrc}
                      alt={`Logo ${project.title}`}
                      className="project-detail__logo-img"
                    />
                  ) : (
                    <span className="project-detail__logo-placeholder">
                      Logo {project.title}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de imágenes (proyecto-1 = 100%, proyecto-2 y proyecto-3 = pequeñas) */}
        <section className="project-detail__gallery">
          <div className="project-detail__gallery-grid">
            {(() => {
              const galleryBySlug: Record<
                string,
                { src: string; alt: string }[]
              > = {
                bimbo: [
                  { src: bimbo1, alt: "Vista principal" },
                  { src: bimbo2, alt: "Vista 2" },
                  { src: bimbo3, alt: "Vista 3" },
                ],
                playerprops: [
                  { src: player1, alt: "Vista principal" },
                  { src: player2, alt: "Vista 2" },
                  { src: player3, alt: "Vista 3" },
                ],
                "adelantto-cash": [
                  { src: adelantto1, alt: "Vista principal" },
                  { src: adelantto2, alt: "Vista 2" },
                  { src: adelantto3, alt: "Vista 3" },
                ],
                michiconf: [
                  { src: michi1, alt: "Vista principal" },
                  { src: michi2, alt: "Vista 2" },
                  { src: michi3, alt: "Vista 3" },
                ],
              };

              const galleryImages = galleryBySlug[slug ?? ""];
              if (!galleryImages) return null;
              return (
                <>
                  <div className="project-detail__gallery-image project-detail__gallery-image--large">
                    <img
                      src={galleryImages[0].src}
                      alt={`${project.title} - ${galleryImages[0].alt}`}
                      className="project-detail__gallery-img"
                    />
                  </div>
                  <div className="project-detail__gallery-image project-detail__gallery-image--small">
                    <img
                      src={galleryImages[1].src}
                      alt={`${project.title} - ${galleryImages[1].alt}`}
                      className="project-detail__gallery-img"
                    />
                  </div>
                  <div className="project-detail__gallery-image project-detail__gallery-image--small">
                    <img
                      src={galleryImages[2].src}
                      alt={`${project.title} - ${galleryImages[2].alt}`}
                      className="project-detail__gallery-img"
                    />
                  </div>
                </>
              );
            })()}
          </div>
        </section>

        {/* Pro gallery (5-image layout with title) */}
        {project.galleryPro && (
          <section className="project-detail__gallery project-detail__gallery--pro">
            <h2 className="project-detail__layout-title">
              {project.layoutTitle}
            </h2>
            <div className="project-detail__gallery-grid-pro">
              <div className="project-detail__gallery-col">
                <img
                  src={project.galleryPro[0]}
                  alt={`${project.title} page 1`}
                />
              </div>
              <div className="project-detail__gallery-col">
                <img
                  src={project.galleryPro[1]}
                  alt={`${project.title} page 2`}
                />
                <img
                  src={project.galleryPro[2]}
                  alt={`${project.title} page 3`}
                />
              </div>
              <div className="project-detail__gallery-col">
                <img
                  src={project.galleryPro[3]}
                  alt={`${project.title} page 4`}
                />
                <img
                  src={project.galleryPro[4]}
                  alt={`${project.title} page 5`}
                />
              </div>
            </div>
          </section>
        )}

        {/* Mobile responsive gallery */}
        {project.galleryMobile && (
          <section className="project-detail__gallery project-detail__gallery--mobile">
            <h2 className="project-detail__responsive-title">RESPONSIVE</h2>
            <div className="project-detail__gallery-grid-pro project-detail__gallery-grid--mobile">
              {project.galleryMobile.map((img, i) => (
                <div className="project-detail__gallery-col" key={i}>
                  <img src={img} alt={`${project.title} mobile ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Design gallery */}
        {project.galleryDesign && (
          <section className="project-detail__gallery project-detail__gallery--design">
            <h2
              className="project-detail__design-title"
              style={{
                background: project.galleryDesign.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {project.galleryDesign.title}
            </h2>
            <div className="project-detail__design-grid">
              {project.galleryDesign.images.map((img, i) => (
                <div className="project-detail__gallery-col" key={i}>
                  <img src={img} alt={`${project.title} design ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Web gallery (2-column grid) */}
        {project.galleryWeb && (
          <section className="project-detail__gallery project-detail__gallery--web">
            <h2
              className="project-detail__design-title"
              style={{
                background: project.galleryWeb.gradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {project.galleryWeb.title}
            </h2>
            <div className="project-detail__web-grid">
              {project.galleryWeb.images.map((img, i) => (
                <div className="project-detail__gallery-col" key={i}>
                  <img src={img} alt={`${project.title} web ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Proyectos relacionados */}
        <section className="project-detail__related">
          <h2 className="project-detail__section-title">Otros proyectos</h2>
          <div className="project-detail__related-grid">
            {projects
              .filter((p) => p.slug !== slug)
              .map((relatedProject) => (
                <ProjectCard
                  key={relatedProject.id}
                  slug={relatedProject.slug}
                  title={relatedProject.title}
                  description={relatedProject.description}
                  imageSrc={relatedProject.imageSrc}
                  imageAlt={relatedProject.imageAlt ?? relatedProject.title}
                  tags={relatedProject.tags}
                />
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};
