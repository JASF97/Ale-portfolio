import "./Hero.scss";

import starIcon from "../../assets/star.svg";
import gridsImg from "../../assets/grids.png";
import gridsImgDesktop from "../../assets/grids-2.png";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Decorative blurs for mobile */}
        <div className="hero__blur hero__blur--1" aria-hidden="true" />
        <div className="hero__blur hero__blur--2" aria-hidden="true" />
        <div className="hero__blur hero__blur--3" aria-hidden="true" />
        <div className="hero__blur hero__blur--4" aria-hidden="true" />

        <img className="hero__grids" src={gridsImg} alt="" aria-hidden="true" />
        <img
          className="hero__grids hero__grids--desktop"
          src={gridsImgDesktop}
          alt=""
          aria-hidden="true"
        />

        <div className="hero__content">
          <img className="hero__star" src={starIcon} alt="star" />
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
