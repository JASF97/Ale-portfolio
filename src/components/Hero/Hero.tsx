import "./Hero.scss";

import starIcon from "../../assets/star.svg";
import gridsImg from "../../assets/grids.png";
import gridsImgDesktop from "../../assets/grids-2.png";
import butterfly from "../../assets/butterfly.svg";
import customersHero from "../../assets/customers-hero.svg";
import planHero from "../../assets/plan-hero.svg";
import cursorAle from "../../assets/cursor-ale.svg";
import labelsHero from "../../assets/labels-hero.svg";
import membersHero from "../../assets/members-hero.svg";

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
            <span className="hero__title-line hero__title-line--name">Alejandra</span>
            <span className="hero__title-line">Avendaño</span>
          </h1>

          <a href="#projects" className="hero__cta">
            Ver mi trabajo
          </a>
        </div>

        <div className="hero__images">
        <img className="hero__butterfly" src={butterfly} alt="butterfly" aria-hidden="true" />
          <img
            src={customersHero}
            alt="Clientes totales"
            className="hero__float-img hero__float-img--customers"
          />
          <img
            src={planHero}
            alt="Seleccionar plan"
            className="hero__float-img hero__float-img--plan"
          />
          <img
            src={cursorAle}
            alt="Cursor"
            className="hero__float-img hero__float-img--cursor"
          />
          <img
            src={labelsHero}
            alt="Etiquetas del proyecto"
            className="hero__float-img hero__float-img--labels"
          />
          <img
            src={membersHero}
            alt="Miembros del equipo"
            className="hero__float-img hero__float-img--members"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
