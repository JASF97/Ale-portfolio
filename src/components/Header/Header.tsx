import "./Header.scss";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoMark from "../../assets/pink-butterfly.svg";
import menuIcon from "../../assets/menu-fill.svg";
import ThemeToggle from "../ThemeToggle";
import LanguageSelect from "../LanguageSelect";
import { useLanguage } from "../../context/useLanguage";

interface HeaderProps {
  logo?: string;
}

const BREAKPOINT_MD = 860;

export const Header = ({ logo = "Alejandra Avendaño" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "/#about" },
    { label: t.nav.work, href: "/#projects" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= BREAKPOINT_MD) setIsMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img className="header__logo-img" src={logoMark} alt="" />
          {logo}
        </Link>

        <div className="header__actions">
          <LanguageSelect className="header__control" />
          <ThemeToggle className="header__control" />

          <nav className="header__nav" aria-label={t.nav.main}>
            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link.href} className="header__nav-item">
                  <a href={link.href} className="header__nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="header__menu-btn"
            type="button"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="header-mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <img className="header__menu-img" src={menuIcon} alt="" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="header__mobile-overlay"
          role="presentation"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            id="header-mobile-menu"
            className="header__mobile-menu"
            aria-label={t.nav.mobile}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="header__mobile-list">
              {navLinks.map((link) => (
                <li key={link.href} className="header__mobile-item">
                  <a
                    href={link.href}
                    className="header__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="header__mobile-theme">
              <LanguageSelect variant="row" />
              <ThemeToggle variant="row" onToggle={() => setIsMenuOpen(false)} />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
