import "./SectionDivider.scss";

interface SectionDividerProps {
  label: string;
  className?: string;
}

/** Separador de sección: línea — etiqueta — línea. */
export const SectionDivider = ({ label, className = "" }: SectionDividerProps) => (
  <div className={`section-divider ${className}`.trim()}>
    <div className="section-divider__line section-divider__line--left" />
    <span className="section-divider__label">{label}</span>
    <div className="section-divider__line section-divider__line--right" />
  </div>
);

export default SectionDivider;
