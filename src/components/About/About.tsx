import "./About.scss";
import butterfly from "../../assets/butterfly.svg";
import AnimatedSection from "../AnimatedSection";
import SectionDivider from "../SectionDivider";
import alejandraImage from "../../assets/alejandra-img.webp";
import alejandraImageDark from "../../assets/alejandra-img-dark.webp";
import { useTheme } from "../../context/useTheme";
import { useLanguage } from "../../context/useLanguage";

export const About = () => {
  const { theme } = useTheme();
  const { t } = useLanguage();
  // La foto trae el círculo de fondo incluido: hay una versión por tema (Figma)
  const portrait = theme === "dark" ? alejandraImageDark : alejandraImage;

  return (
    <section className="about" id="about">
      <div className="about__container">
        <SectionDivider label={t.about.title} />

        <div className="about__content">
          <div className="about__text">
            <AnimatedSection>
              <h2 className="about__greeting">{t.about.greeting}</h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <p className="about__description">
                <span className="about__text-bold">{t.about.part1Bold}</span>{" "}
                {t.about.part2}{" "}
                <span className="about__text-bold">{t.about.part3Bold}</span>{" "}
                {t.about.part4}
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="left" delay={200}>
            <div className="about__image-wrapper">
              <img
                src={portrait}
                alt="Alejandra Avendaño"
                className="about__image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </AnimatedSection>

          <div
            className="about__gradient about__gradient--1"
            aria-hidden="true"
          />
          <div
            className="about__gradient about__gradient--2"
            aria-hidden="true"
          />
          <div
            className="about__gradient about__gradient--3"
            aria-hidden="true"
          />

          <img
            className="about__butterfly"
            src={butterfly}
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
