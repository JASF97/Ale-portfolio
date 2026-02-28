import { useParams, Navigate, Link } from 'react-router-dom';
import { getProjectById, 
    // getOtherProjects 
} from './constants';
// import Card from '@/components/Card';
// import ContactSection from '@/components/ContactSection';
// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
import "./ProyectDetails.scss";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(Number(id));

  if (!project) {
    return <Navigate to="/404" replace />;
  }

//   const otherProjects = getOtherProjects(project.id);

  const highlightBold = (text: string, boldPart: string) => {
    const index = text.toLowerCase().indexOf(boldPart.toLowerCase());
    if (index === -1) return text;
    const before = text.slice(0, index);
    const bold = text.slice(index, index + boldPart.length);
    const after = text.slice(index + boldPart.length);
    return (
      <>
        {before}
        <strong>{bold}</strong>
        {after}
      </>
    );
  };

  return (
    <div className="project-detail">

      {/* Section 1 - Project Header */}
      <section
        className="project-detail__header"
        style={{ background: project.headerGradient }}
      >
        <Link to="/" className="project-detail__back">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </Link>

        <div className="project-detail__collab-badge">
          ALEJANDRA AVENDAÑO + {project.collaborator}
        </div>

        <h1 className="project-detail__project-title">{project.title}</h1>

        <div className="project-detail__header-content">
          <div className="project-detail__header-left">
            <p className="project-detail__section-label">Descripción</p>
            <p className="project-detail__description">
              {highlightBold(project.description, project.descriptionBold)}
            </p>

            <p className="project-detail__section-label">Meta</p>
            <p className="project-detail__meta">
              {highlightBold(project.meta, project.metaBold)}
            </p>
          </div>

          <div className="project-detail__header-right">
            <div className="project-detail__info-table">
              <div className="project-detail__info-row">
                <span className="project-detail__info-label">Cliente</span>
                <span className="project-detail__info-value">{project.client}</span>
              </div>
              <div className="project-detail__info-row">
                <span className="project-detail__info-label">Tipo</span>
                <span className="project-detail__info-value">{project.type}</span>
              </div>
              <div className="project-detail__info-row">
                <span className="project-detail__info-label">Software</span>
                <span className="project-detail__info-value">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.5 2a3.5 3.5 0 0 0 0 7h3V5.5A3.5 3.5 0 0 0 5.5 2zm0 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
                    <path d="M12.5 2h-3v5h3a2.5 2.5 0 0 0 0-5z"/>
                    <path d="M12.5 9h-3v5h3a2.5 2.5 0 0 0 0-5z"/>
                    <path d="M5.5 16a3.5 3.5 0 0 0 3-1.72V16a3.5 3.5 0 1 1-3-5.5 3.5 3.5 0 0 0 0 5.5z"/>
                    <path d="M12.5 16a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
                  </svg>
                  {project.software}
                </span>
              </div>
            </div>

            <div className="project-detail__logo-container">
              {project.client}
            </div>
          </div>
        </div>
      </section>


      {/* Section 2 - Image Gallery (always shown) */}
      <section className="project-detail__gallery">
        <div className="project-detail__gallery-main">
          <img src={project.heroImage} alt={`${project.title} hero`} />
        </div>
        <div className="project-detail__gallery-row">
          <div className="project-detail__gallery-half">
            <img src={project.galleryImages[0]} alt={`${project.title} gallery 1`} />
          </div>
          <div className="project-detail__gallery-half">
            <img src={project.galleryImages[1]} alt={`${project.title} gallery 2`} />
          </div>
        </div>
      </section>

      {/* Pro gallery (5-image layout with title) */}
      {project.galleryPro && (
        <section className="project-detail__gallery project-detail__gallery--pro">
          <h2 className="project-detail__layout-title">{project.layoutTitle}</h2>
          <div className="project-detail__gallery-grid">
            <div className="project-detail__gallery-col">
              <img src={project.galleryPro[0]} alt={`${project.title} page 1`} />
            </div>
            <div className="project-detail__gallery-col">
              <img src={project.galleryPro[1]} alt={`${project.title} page 2`} />
              <img src={project.galleryPro[2]} alt={`${project.title} page 3`} />
            </div>
            <div className="project-detail__gallery-col">
              <img src={project.galleryPro[3]} alt={`${project.title} page 4`} />
              <img src={project.galleryPro[4]} alt={`${project.title} page 5`} />
            </div>
          </div>
        </section>
      )}

      {/* Mobile responsive gallery */}
      {project.galleryMobile && (
        <section className="project-detail__gallery project-detail__gallery--mobile">
          <h2 className="project-detail__responsive-title">RESPONSIVE</h2>
          <div className="project-detail__gallery-grid project-detail__gallery-grid--mobile">
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
            style={{ background: project.galleryDesign.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
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
            style={{ background: project.galleryWeb.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
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

      {!project.galleryPro && !project.galleryDesign && !project.galleryWeb && (
        <section className="project-detail__layout-section">
          <h2 className="project-detail__layout-title">{project.layoutTitle}</h2>
          <div className="project-detail__layout-image">
            <img src={project.layoutImage} alt={`${project.title} layout`} />
          </div>
        </section>
      )}

    </div>
  );
};

export default ProjectDetails;
