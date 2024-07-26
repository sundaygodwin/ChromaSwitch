import { useState } from "react";

export default function ColorBox({ color }) {
  const getBgColor = () => color[Math.floor(Math.random() * color.length)];
  const [background, setBackground] = useState({ background: getBgColor() });
  const toggle = () => {
    let newColor = getBgColor();
    setBackground({ background: newColor });
  };
  return (
    <>
      <div className="colorBox" style={background} onClick={toggle}></div>
    </>
  );
}
