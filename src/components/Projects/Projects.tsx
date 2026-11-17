import AnimatedSection from "../AnimatedSection";
import ProjectCard from "../ProjectCard";
import SectionDivider from "../SectionDivider";
import "./Projects.scss";

import { projects } from "./projectsData";
import { useLanguage } from "../../context/useLanguage";

export const Projects = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <SectionDivider label={t.projects.title} className="projects__header" />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={(index % 2) * 100}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                description={project.description[lang]}
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt ?? `${t.projects.imageAlt} ${project.title}`}
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
