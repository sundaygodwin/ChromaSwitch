import "./styles.css";

import ColorBox from "./colorBox";

export default function ColorToggler() {
  const color = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox color={color} key={i} />);
  }
  return <div className="mainBox">{boxes}</div>;
}
