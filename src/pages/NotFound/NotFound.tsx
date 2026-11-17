import "./NotFound.scss";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import butterfly from "../../assets/butterfly.svg";
import { useLanguage } from "../../context/useLanguage";

/** Página 404: rutas que no existen y proyectos con un slug inválido. */
export const NotFound = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="not-found">
        <img className="not-found__butterfly" src={butterfly} alt="" aria-hidden="true" />
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">{t.notFound.title}</h1>
        <p className="not-found__description">
          {t.notFound.description}
        </p>
        <div className="not-found__actions">
          <Link to="/" className="not-found__cta">
            {t.notFound.home}
          </Link>
          <a href="/#projects" className="not-found__link">
            {t.notFound.work}
          </a>
        </div>
      </main>
    </>
  );
};

export default NotFound;
