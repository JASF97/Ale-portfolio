import "./About.scss";
import butterfly from "../../assets/butterfly.svg";
import AnimatedSection from "../AnimatedSection";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__header">
          <div className="about__line about__line--left"></div>
          <span className="about__label">Sobre mí</span>
          <div className="about__line about__line--right"></div>
        </div>

        <div className="about__content">
          <div className="about__text">
            <AnimatedSection>
              <h2 className="about__greeting">Hola a todos 👋</h2>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <p className="about__description">
                <span className="about__text-bold">
                  Con más de 3 años de experiencia en diseño UX/UI,
                </span>{" "}
                he trabajado en la creación de productos digitales en sectores
                como finanzas, tecnología, entretenimiento, inmobiliaria y
                e-commerce, siempre enfocada en{" "}
                <span className="about__text-bold">
                  crear experiencias centradas en las personas
                </span>{" "}
                y funcionales, buscando que sean intuitivas, simples y
                atractivas que le generen una emoción.
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="left" delay={200}>
            <div className="about__image-wrapper">
              <img
                src="../src/assets/alejandra-img.png"
                alt="Alejandra Avendaño"
                className="about__image"
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
            alt="butterfly"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
