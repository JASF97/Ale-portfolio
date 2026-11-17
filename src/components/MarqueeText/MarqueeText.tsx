import "./MarqueeText.scss";
import { useLanguage } from "../../context/useLanguage";

const ITEMS_PER_HALF = 12;

// La cinta es decorativa: repite el mismo texto. Se anuncia una sola vez
// a lectores de pantalla y el resto queda oculto.
const MarqueeText = () => {
  const { t } = useLanguage();

  const renderHalf = (half: number) =>
    Array.from({ length: ITEMS_PER_HALF }, (_, i) => (
      <span className="marquee__item" key={`${half}-${i}`}>
        {t.marquee}
        <span className="marquee__dot" />
      </span>
    ));

  return (
    <div className="marquee">
      <span className="sr-only">{t.marquee}</span>
      <div className="marquee__track" aria-hidden="true">
        {renderHalf(0)}
        {renderHalf(1)}
      </div>
    </div>
  );
};

export default MarqueeText;
