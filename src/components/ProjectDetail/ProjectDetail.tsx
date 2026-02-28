import "./ProjectDetail.scss";

export const ProjectDetail = () => {
  return (
    <main className="project-detail">
      <div className="project-detail__container">
        {/* Header del proyecto */}
        <section className="project-detail__header">
          <a href="/projects" className="project-detail__back">
            ← Volver a proyectos
          </a>

          <div className="project-detail__hero">
            <div className="project-detail__hero-image">
              {/* Contenedor para imagen principal del proyecto */}
            </div>
            <div className="project-detail__hero-content">
              <h1 className="project-detail__title">Nombre del Proyecto</h1>
              <p className="project-detail__description">
                Descripción breve del proyecto y su propósito principal.
              </p>
              <div className="project-detail__tech-stack">
                <span className="project-detail__tech">React</span>
                <span className="project-detail__tech">TypeScript</span>
                <span className="project-detail__tech">SCSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Galería de imágenes */}
        <section className="project-detail__gallery">
          <h2 className="project-detail__section-title">Galería</h2>
          <div className="project-detail__gallery-grid">
            <div className="project-detail__gallery-image project-detail__gallery-image--large">
              {/* Contenedor para imagen grande */}
            </div>
            <div className="project-detail__gallery-image project-detail__gallery-image--small">
              {/* Contenedor para imagen pequeña 1 */}
            </div>
            <div className="project-detail__gallery-image project-detail__gallery-image--small">
              {/* Contenedor para imagen pequeña 2 */}
            </div>
          </div>
        </section>

        {/* Detalles del proyecto */}
        <section className="project-detail__content">
          <div className="project-detail__main">
            <h2 className="project-detail__section-title">Sobre el proyecto</h2>
            <div className="project-detail__description-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>

            <h3 className="project-detail__subsection-title">
              Características principales
            </h3>
            <ul className="project-detail__features">
              <li className="project-detail__feature">
                Característica 1 del proyecto
              </li>
              <li className="project-detail__feature">
                Característica 2 del proyecto
              </li>
              <li className="project-detail__feature">
                Característica 3 del proyecto
              </li>
            </ul>
          </div>

          <aside className="project-detail__sidebar">
            <div className="project-detail__info-card">
              <h3 className="project-detail__info-title">
                Información del proyecto
              </h3>
              <div className="project-detail__info-item">
                <span className="project-detail__info-label">Cliente:</span>
                <span className="project-detail__info-value">
                  Nombre del cliente
                </span>
              </div>
              <div className="project-detail__info-item">
                <span className="project-detail__info-label">Duración:</span>
                <span className="project-detail__info-value">3 meses</span>
              </div>
              <div className="project-detail__info-item">
                <span className="project-detail__info-label">Rol:</span>
                <span className="project-detail__info-value">
                  Desarrollador Frontend
                </span>
              </div>
            </div>

            <div className="project-detail__actions">
              <a
                href="#"
                className="project-detail__btn project-detail__btn--primary"
              >
                Ver proyecto en vivo
              </a>
              <a
                href="#"
                className="project-detail__btn project-detail__btn--secondary"
              >
                Ver código fuente
              </a>
            </div>
          </aside>
        </section>

        {/* Proyectos relacionados */}
        <section className="project-detail__related">
          <h2 className="project-detail__section-title">
            Proyectos relacionados
          </h2>
          <div className="project-detail__related-grid">
            <div className="project-detail__related-card">
              <div className="project-detail__related-image">
                {/* Contenedor para imagen relacionada 1 */}
              </div>
              <h3 className="project-detail__related-title">
                Proyecto relacionado 1
              </h3>
            </div>
            <div className="project-detail__related-card">
              <div className="project-detail__related-image">
                {/* Contenedor para imagen relacionada 2 */}
              </div>
              <h3 className="project-detail__related-title">
                Proyecto relacionado 2
              </h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
