import "./Hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Hola! 👋 soy diseñadora UX/UI.</p>

          <h1 className="hero__title">
            <div style={{ position: "relative" }}>
              {/* <img
                className="hero__title-line--name"
                src="/selection-name.svg"
                alt=""
              /> */}
              <span className="hero__title-line">Alejandra</span>
            </div>

            <span className="hero__title-line">Avendaño</span>
          </h1>

          <a href="#projects" className="hero__cta">
            Ver mi trabajo
          </a>
        </div>

        <div className="hero__images">
          {/* <img
            src="/plan-hero.svg"
            alt="Clientes totales"
            className="hero__float-img hero__float-img--customers"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
