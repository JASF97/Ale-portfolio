import "./ThemeToggle.scss";
import { useTheme } from "../../context/useTheme";
import { useLanguage } from "../../context/useLanguage";

const SunIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" />
    <line x1="12" y1="1.5" x2="12" y2="3.5" />
    <line x1="12" y1="20.5" x2="12" y2="22.5" />
    <line x1="4.58" y1="4.58" x2="5.99" y2="5.99" />
    <line x1="18.01" y1="18.01" x2="19.42" y2="19.42" />
    <line x1="1.5" y1="12" x2="3.5" y2="12" />
    <line x1="20.5" y1="12" x2="22.5" y2="12" />
    <line x1="4.58" y1="19.42" x2="5.99" y2="18.01" />
    <line x1="18.01" y1="5.99" x2="19.42" y2="4.58" />
  </svg>
);

const MoonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 13.2A8.2 8.2 0 1 1 10.8 4a6.4 6.4 0 0 0 9.2 9.2z" />
    <path d="M17.5 3.2l.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6z" fill="currentColor" stroke="none" />
  </svg>
);

interface ThemeToggleProps {
  /** "pill": icono + etiqueta (header). "icon": solo icono. "row": fila del menú móvil. */
  variant?: "pill" | "icon" | "row";
  className?: string;
  onToggle?: () => void;
}

export const ThemeToggle = ({
  variant = "pill",
  className = "",
  onToggle,
}: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const { t } = useLanguage();
  const nextLabel = isDark ? t.theme.toLight : t.theme.toDark;

  const handleClick = () => {
    toggleTheme();
    onToggle?.();
  };

  return (
    <button
      type="button"
      className={`theme-toggle theme-toggle--${variant} ${className}`.trim()}
      aria-label={nextLabel}
      title={nextLabel}
      onClick={handleClick}
    >
      <span className="theme-toggle__icon" key={theme}>
        {variant === "row" ? (
          isDark ? <SunIcon /> : <MoonIcon />
        ) : isDark ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )}
      </span>
      {variant === "pill" && (
        <span className="theme-toggle__label">{isDark ? "Dark" : "Light"}</span>
      )}
      {variant === "row" && (
        <span className="theme-toggle__label">
          {isDark ? t.theme.light : t.theme.dark}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
