import "./LanguageSelect.scss";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/useLanguage";
import { LANGUAGES, type Lang } from "../../i18n/translations";

interface LanguageSelectProps {
  /** "pill": desplegable del header. "row": opciones a la vista (menú móvil). */
  variant?: "pill" | "row";
  /** Para barras sobre fondo oscuro fijo (detalle de proyecto). */
  onDark?: boolean;
  className?: string;
  onChange?: () => void;
}

export const LanguageSelect = ({
  variant = "pill",
  onDark = false,
  className = "",
  onChange,
}: LanguageSelectProps) => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    if (!isOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const choose = (code: Lang) => {
    setLang(code);
    setIsOpen(false);
    onChange?.();
  };

  if (variant === "row") {
    return (
      <div
        className={`language-select language-select--row ${className}`.trim()}
        role="group"
        aria-label={t.language.label}
      >
        {LANGUAGES.map(({ code, label }) => (
          <button
            key={code}
            type="button"
            lang={code}
            className={`language-select__chip ${code === lang ? "language-select__chip--active" : ""}`.trim()}
            aria-pressed={code === lang}
            onClick={() => choose(code)}
          >
            {label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={rootRef}
      className={`language-select language-select--pill ${onDark ? "language-select--on-dark" : ""} ${className}`
        .replace(/\s+/g, " ")
        .trim()}
    >
      <button
        type="button"
        className="language-select__trigger"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={`${t.language.change} (${current.label})`}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="language-select__code">{current.short}</span>
        <svg
          className={`language-select__chevron ${isOpen ? "language-select__chevron--open" : ""}`.trim()}
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1.5 1.5 5 5l3.5-3.5" />
        </svg>
      </button>

      {isOpen && (
        <ul className="language-select__menu" aria-label={t.language.label}>
          {LANGUAGES.map(({ code, label, short }) => (
            <li key={code}>
              <button
                type="button"
                lang={code}
                className={`language-select__option ${code === lang ? "language-select__option--active" : ""}`.trim()}
                aria-current={code === lang ? "true" : undefined}
                onClick={() => choose(code)}
              >
                <span className="language-select__option-code">{short}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
