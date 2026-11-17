import "./Hero.scss";

import starIcon from "../../assets/star.svg";
import gridsImg from "../../assets/grids.png";
import gridsImgDesktop from "../../assets/grids-2.png";
import butterfly from "../../assets/butterfly.svg";
import customersHero from "../../assets/customers-hero.svg";
import planHero from "../../assets/plan-hero.svg";
import cursorAle from "../../assets/cursor-ale.svg";
import labelsHero from "../../assets/labels-hero.svg";
import membersHero from "../../assets/members-hero.webp";
import { useLanguage } from "../../context/useLanguage";
import type { Lang } from "../../i18n/translations";

const cardsEs = {
  customers: customersHero,
  plan: planHero,
  labels: labelsHero,
  members: membersHero,
};

// Tarjetas flotantes por idioma. El texto va dentro de la imagen, así que cada
// idioma necesita sus archivos; si falta alguno se usa el de español.
const cardsByLang: Record<Lang, Partial<typeof cardsEs>> = {
  es: cardsEs,
  en: {},
};

export const Hero = () => {
  const { lang, t } = useLanguage();
  const cards = { ...cardsEs, ...cardsByLang[lang] };

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
          <img className="hero__star" src={starIcon} alt="" aria-hidden="true" />
          <p className="hero__greeting">{t.hero.greeting}</p>

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--name">Alejandra</span>
            <span className="hero__title-line">Avendaño</span>
          </h1>

          <a href="#projects" className="hero__cta">
            {t.hero.cta}
          </a>
        </div>

        <div className="hero__images">
        <img className="hero__butterfly" src={butterfly} alt="" aria-hidden="true" />
          <img
            src={cards.customers}
            alt={t.hero.customersAlt}
            className="hero__float-img hero__float-img--customers"
          />
          <img
            src={cards.plan}
            alt={t.hero.planAlt}
            className="hero__float-img hero__float-img--plan"
          />
          <img
            src={cursorAle}
            alt=""
            aria-hidden="true"
            className="hero__float-img hero__float-img--cursor"
          />
          <img
            src={cards.labels}
            alt={t.hero.labelsAlt}
            className="hero__float-img hero__float-img--labels"
          />
          <img
            src={cards.members}
            alt={t.hero.membersAlt}
            className="hero__float-img hero__float-img--members"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
