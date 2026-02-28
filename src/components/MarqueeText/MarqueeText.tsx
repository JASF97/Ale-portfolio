import './MarqueeText.scss';

const MarqueeText = () => {
  const items = Array.from({ length: 12 }, (_, i) => (
    <span className="marquee__item" key={i}>
      Trabajo seleccionado
      <span className="marquee__dot" />
    </span>
  ));

  return (
    <div className="marquee">
      <div className="marquee__track">
        {items}
        {items}
      </div>
    </div>
  );
};

export default MarqueeText;
