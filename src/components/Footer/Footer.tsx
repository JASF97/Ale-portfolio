import "./Footer.scss";
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">

        <p className="footer__copyright">
          Copyright © Alejandra Avendaño {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
