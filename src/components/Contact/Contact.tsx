import "./Contact.scss";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <div className="contact__line contact__line--left"></div>
          <span className="contact__label">Contáctame</span>
          <div className="contact__line contact__line--right"></div>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__left-info">
              <h2 className="contact__left-title">
                Trabajemos juntos <img src="/Misc.svg" alt="" />
              </h2>
              <p className="contact__left-description">
                Si tienes un proyecto en mente y quieres crear una experiencia
                digital que realmente impacte,{" "}
                <span className="contact__left-description--bold">
                  no dudes en escribirme.
                </span>
              </p>
            </div>

            <div className="contact__social">
              <div className="contact__social-red">
                <img src="/LinkedIn.svg" alt="" />
                <a
                  href="https://linkedin.com"
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="contact__social-red">
                <img src="/Behance.svg" alt="" />
                <a
                  href="https://behance.net"
                  className="contact__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Behance
                </a>
              </div>
            </div>
          </div>

          <div className="contact__right-info">
            <h3 className="contact__right-title">Contáctame</h3>
            <a
              href="mailto:alejandra18gao@gmail.com"
              className="contact__right-link"
            >
              alejandra18gao@gmail.com
            </a>
            <a href="tel:+584140917303" className="contact__right-link">
              +584140917303
            </a>
          </div>
        </div>
      </div>

      {/* <img className="contact__frame" src="/frame-contact.png" alt="" /> */}
    </section>
  );
};

export default Contact;
