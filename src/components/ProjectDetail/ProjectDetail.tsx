import "./ProjectDetail.scss";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getProjectBySlug,
  projects,
  type ProjectDecoration,
} from "../Projects/projectsData";
import ProjectCard from "../ProjectCard";
import { Contact } from "../Contact";
import AnimatedSection from "../AnimatedSection";
import SectionDivider from "../SectionDivider";
import ThemeToggle from "../ThemeToggle";
import LanguageSelect from "../LanguageSelect";
import { useLanguage } from "../../context/useLanguage";
import NotFound from "../../pages/NotFound/NotFound";

const gradientTextStyle = (gradient: string) => ({
  background: gradient,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

const Decorations = ({ items = [] }: { items?: ProjectDecoration[] }) => (
  <>
    {items.map(({ src, modifier }) => (
      <img
        key={modifier}
        src={src}
        alt=""
        className={`project-detail__sport-ball project-detail__sport-ball--${modifier}`}
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    ))}
  </>
);

const metaKeys = ["client", "type", "software"] as const;

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { lang, t } = useLanguage();

  if (!project) return <NotFound />;

  const {
    header,
    creatorTags = [],
    galleryMain,
    galleryMainDecorations,
    galleryPro,
    galleryMobile,
    galleryDesign,
    galleryWeb,
  } = project;
  const title = project.detailTitle ?? project.title;
  const [mainLarge, ...mainSmall] = galleryMain;
  const relatedProjects = projects.filter((p) => p.slug !== project.slug);

  return (
    <main className="project-detail">
      <div className="project-detail__container">
        {/* Encabezado del proyecto */}
        <section
          className={`project-detail__header project-detail__header--${project.slug}`}
          style={{ background: header.background }}
        >
          {header.gradients?.map((name) => (
            <div
              key={name}
              className={`project-detail__header-gradient project-detail__header-gradient--${name}`}
              aria-hidden="true"
            />
          ))}

          {header.art?.map(({ src, modifier }) => (
            <img
              key={modifier}
              src={src}
              alt=""
              className={`project-detail__header-art project-detail__header-art--${modifier}`}
              aria-hidden="true"
            />
          ))}

          {header.overlayImage && (
            <img
              src={header.overlayImage}
              alt=""
              className="project-detail__header-distortion"
              aria-hidden="true"
            />
          )}

          <div className="project-detail__header-inner">
            <div className="project-detail__topbar">
              <Link to="/" className="project-detail__back">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
                {t.detail.back}
              </Link>
              <LanguageSelect onDark />
              <ThemeToggle variant="icon" />
            </div>

            {creatorTags.length > 0 && (
              <div className="project-detail__pills">
                {creatorTags.map((tag, index) => (
                  <Fragment key={tag}>
                    {index > 0 && (
                      <span
                        className="project-detail__pill-sep"
                        aria-hidden="true"
                      >
                        ◆
                      </span>
                    )}
                    <span className="project-detail__pill">{tag}</span>
                  </Fragment>
                ))}
              </div>
            )}

            <div className="project-detail__header-grid">
              {/* Izquierda: nombre, descripción, meta */}
              <div className="project-detail__header-left">
                <h1 className="project-detail__header-title">
                  {title.toUpperCase()}
                </h1>
                <div className="project-detail__header-block">
                  <h2 className="project-detail__header-label">
                    {t.detail.description}
                  </h2>
                  <p className="project-detail__header-text">
                    {(project.descriptionLong ?? project.description)[lang]}
                  </p>
                </div>
                {project.meta && (
                  <div className="project-detail__header-block">
                    <h2 className="project-detail__header-label">
                      {t.detail.goal}
                    </h2>
                    <p className="project-detail__header-text">
                      {project.meta[lang]}
                    </p>
                  </div>
                )}
              </div>

              {/* Derecha: cliente, tipo, software, logo */}
              <div className="project-detail__header-right">
                <dl className="project-detail__meta-list">
                  {metaKeys.map(
                    (key) =>
                      project[key] && (
                        <div className="project-detail__meta-row" key={key}>
                          <dt className="project-detail__meta-label">
                            {t.detail[key]}
                          </dt>
                          <dd className="project-detail__meta-value">
                            {project[key]}
                          </dd>
                        </div>
                      ),
                  )}
                </dl>
                <div className="project-detail__logo-card">
                  {project.logoSrc ? (
                    <img
                      src={project.logoSrc}
                      alt={`${t.detail.logo} ${project.title}`}
                      className="project-detail__logo-img"
                    />
                  ) : (
                    <span className="project-detail__logo-placeholder">
                      {t.detail.logo} {project.title}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Galería principal: una imagen a todo el ancho y dos a la mitad */}
        <section
          className={`project-detail__gallery project-detail__gallery--${project.slug}`}
        >
          <Decorations items={galleryMainDecorations} />
          <div className="project-detail__gallery-grid">
            <div className="project-detail__gallery-image project-detail__gallery-image--large">
              <img
                src={mainLarge}
                alt={`${title} - ${t.detail.mainView}`}
                className="project-detail__gallery-img"
              />
            </div>
            {mainSmall.map((src, i) => (
              <div
                className="project-detail__gallery-image project-detail__gallery-image--small"
                key={src}
              >
                <img
                  src={src}
                  alt={`${title} - ${t.detail.view} ${i + 2}`}
                  className="project-detail__gallery-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Páginas del sitio: tres columnas (1 + 2 + 2 imágenes) */}
        {galleryPro && (
          <section className="project-detail__gallery project-detail__gallery--pro">
            {project.layoutTitle && (
              <h2 className="project-detail__layout-title">
                {project.layoutTitle[lang]}
              </h2>
            )}
            <div className="project-detail__gallery-grid-pro">
              {[galleryPro.slice(0, 1), galleryPro.slice(1, 3), galleryPro.slice(3, 5)].map(
                (column, columnIndex) => (
                  <div className="project-detail__gallery-col" key={columnIndex}>
                    {column.map((src) => (
                      <img
                        key={src}
                        src={src}
                        alt={`${title} - ${t.detail.page} ${galleryPro.indexOf(src) + 1}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                ),
              )}
            </div>
          </section>
        )}

        {/* Versión móvil */}
        {galleryMobile && (
          <section className="project-detail__gallery project-detail__gallery--mobile">
            <h2 className="project-detail__responsive-title">
              {t.detail.responsive}
            </h2>
            <div className="project-detail__gallery-grid-pro project-detail__gallery-grid--mobile">
              {galleryMobile.map((src, i) => (
                <div className="project-detail__gallery-col" key={src}>
                  <img
                    src={src}
                    alt={`${title} - ${t.detail.mobileView} ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Diseño */}
        {galleryDesign && (
          <section className="project-detail__gallery project-detail__gallery--design">
            <Decorations items={galleryDesign.decorations} />
            <h2
              className="project-detail__design-title"
              style={gradientTextStyle(galleryDesign.gradient)}
            >
              {galleryDesign.title[lang]}
            </h2>
            <div className="project-detail__design-grid">
              {galleryDesign.images.map((src, i) => (
                <div className="project-detail__gallery-col" key={src}>
                  <img
                    src={src}
                    alt={`${title} - ${t.detail.design} ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sitio web: cuadrícula de 2 columnas */}
        {galleryWeb && (
          <section
            className={`project-detail__gallery project-detail__gallery--web project-detail__gallery--${project.slug}-web`}
          >
            <Decorations items={galleryWeb.decorations} />
            <h2
              className="project-detail__design-title"
              style={gradientTextStyle(galleryWeb.gradient)}
            >
              {galleryWeb.title[lang]}
            </h2>
            <div className="project-detail__web-grid">
              {galleryWeb.images.map((src, i) => (
                <div className="project-detail__gallery-col" key={src}>
                  <img
                    src={src}
                    alt={`${title} - ${t.detail.screen} ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Galerías por columnas (título + columnas de imágenes) */}
        {project.galleries?.map((gallery) => (
          <section
            className="project-detail__gallery project-detail__gallery--web"
            key={gallery.title.es}
          >
            <h2
              className="project-detail__design-title"
              style={gradientTextStyle(gallery.gradient)}
            >
              {gallery.title[lang]}
            </h2>
            <div
              className={`project-detail__columns-grid project-detail__columns-grid--${gallery.columns.length}`}
            >
              {gallery.columns.map((column, columnIndex) => (
                <div className="project-detail__gallery-col" key={columnIndex}>
                  {column.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${title} - ${gallery.title[lang].toLowerCase()} ${columnIndex + 1}.${i + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="project-detail__footer-area">
          {/* Otros proyectos */}
          <section className="projects project-detail__related">
            <div
              className="project-detail__projects-gradient project-detail__projects-gradient--1"
              aria-hidden="true"
            />
            <div
              className="project-detail__projects-gradient project-detail__projects-gradient--2"
              aria-hidden="true"
            />

            <SectionDivider label={t.projects.others} />

            <div className="project-detail__related-grid">
              {relatedProjects.map((related, index) => (
                <AnimatedSection key={related.id} delay={index * 100}>
                  <ProjectCard
                    slug={related.slug}
                    title={related.title}
                    description={related.description[lang]}
                    imageSrc={related.imageSrc}
                    imageAlt={related.imageAlt ?? `${t.projects.imageAlt} ${related.title}`}
                    tags={related.tags}
                  />
                </AnimatedSection>
              ))}
            </div>
          </section>

          <Contact />
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
