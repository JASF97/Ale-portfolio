import AnimatedSection from "../AnimatedSection";
import ProjectCard from "../ProjectCard";
import "./Projects.scss";

import { projects } from "./projectsData";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div className="about__line about__line--left"></div>
          <span className="about__label">Mi Trabajo</span>
          <div className="about__line about__line--right"></div>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 100}>
              <ProjectCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                tags={project.tags}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
