import "./Footer.scss";
import miscIcon from "../../assets/Misc.svg";
import linkedInIcon from "../../assets/LinkedIn.svg";
import behanceIcon from "../../assets/Behance.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__header">
          <div className="footer__line footer__line--left"></div>
          <span className="footer__label">Contáctame</span>
          <div className="footer__line footer__line--right"></div>
        </div>

        <div className="footer__content">
          <div className="footer__left">
            <h2 className="footer__title">
              Trabajemos juntos <img src={miscIcon} alt="" aria-hidden />
            </h2>
            <p className="footer__description">
              Si tienes un proyecto en mente y quieres crear una experiencia
              digital que realmente impacte,{" "}
              <span className="footer__description--bold">
                no dudes en escribirme.
              </span>
            </p>
            <div className="footer__social">
              <div className="footer__social-item">
                <img src={linkedInIcon} alt="" aria-hidden />
                <a
                  href="https://linkedin.com"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <div className="footer__social-item">
                <img src={behanceIcon} alt="" aria-hidden />
                <a
                  href="https://behance.net"
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>

          <div className="footer__right">
            <h3 className="footer__contact-title">Contáctame</h3>
            <a
              href="mailto:alejandra18gao@gmail.com"
              className="footer__contact-link"
            >
              alejandra18gao@gmail.com
            </a>
            <a href="tel:+584140917303" className="footer__contact-link">
              +584140917303
            </a>
          </div>
        </div>

        <p className="footer__copyright">
          Copyright © Alejandra Avendaño {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
