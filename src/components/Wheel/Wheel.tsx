import React, { useRef, useState } from "react";
import "./Wheel.scss";

interface Item {
  i: number;
  clr: string;
}

const ITEMS: Item[] = [
  { i: 1, clr: "#db7093" },
  { i: 2, clr: "#20b2aa" },
  { i: 3, clr: "#d63e92" },
  { i: 4, clr: "#daa520" },
  { i: 5, clr: "#ff340f" },
  { i: 6, clr: "#ff7f50" },
];

export default function Wheel() {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    const newRotation = rotation + Math.ceil(Math.random() * 3600);
    setRotation(newRotation);
    
    if (wheelRef.current) {
      wheelRef.current.style.transform = `rotate(${newRotation}deg)`;
    }
  };

  return (
    <div className="wheel_container">
      <button onClick={spinWheel} className="spinBtn">Spin</button>
      <div className="wheel" ref={wheelRef}>
        {ITEMS.map(({ i, clr }) => (
          <div
            key={i}
            className="number"
            style={{ "--i": i, "--clr": clr } as React.CSSProperties}
          >
            <span>100</span>
          </div>
        ))}
      </div>
    </div>
  );
}
