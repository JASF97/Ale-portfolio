import "./Header.scss";

import { useEffect, useState } from "react";

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

export const Header = ({
  logo = "Alejandra Avendaño",
  navLinks = defaultNavLinks,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <img className="header__logo-img" src="/Mariposa-rosa.svg" alt="" />
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

        <button
          className="header__menu-btn"
          type="button"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="header-mobile-menu"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span>
            <img className="header__menu-img" src="/menu-fill.svg" alt="" />
          </span>
        </button>
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
