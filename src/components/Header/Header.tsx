import "./Header.scss";

import { useEffect, useState } from "react";
import logoMark from "../../assets/pink-butterfly.svg";
import menuIcon from "../../assets/menu-fill.svg";
import { useTheme } from "../../context/useTheme";

interface NavLink {
  label: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  navLinks?: NavLink[];
}

const defaultNavLinks: NavLink[] = [
  { label: "Sobre mí", href: "#about" },
  { label: "Mi trabajo", href: "#projects" },
  { label: "Contáctame", href: "#contact" },
];

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const Header = ({
  logo = "Alejandra Avendaño",
  navLinks = defaultNavLinks,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const BREAKPOINT_MD = 860;

    const onResize = () => {
      if (window.innerWidth >= BREAKPOINT_MD) setIsMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <img className="header__logo-img" src={logoMark} alt="" />
          {logo}
        </a>

        <nav className="header__nav">
          <ul className="header__nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="header__nav-item">
                <a href={link.href} className="header__nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            className="header__theme-btn"
            type="button"
            aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
            onClick={toggleTheme}
          >
            <span className={`header__theme-icon header__theme-icon--sun ${theme === "dark" ? "header__theme-icon--active" : ""}`}>
              <SunIcon />
            </span>
            <span className={`header__theme-icon header__theme-icon--moon ${theme === "light" ? "header__theme-icon--active" : ""}`}>
              <MoonIcon />
            </span>
          </button>

          <button
            className="header__menu-btn"
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="header-mobile-menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span>
              <img className="header__menu-img" src={menuIcon} alt="" />
            </span>
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
            aria-label="Navegación"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="header__mobile-list">
              {navLinks.map((link, index) => (
                <li key={index} className="header__mobile-item">
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
              <button
                className="header__mobile-theme-btn"
                type="button"
                onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
              >
                {theme === "light" ? <MoonIcon /> : <SunIcon />}
                <span>{theme === "light" ? "Modo oscuro" : "Modo claro"}</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
