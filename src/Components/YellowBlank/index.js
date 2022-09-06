import React, { useRef, useEffect } from "react";
import "./style.css";
import { Power4 } from "gsap";
function YellowBlank({ timeline }) {
  const trans = useRef(null);
  useEffect(() => {
    // document.body.style.overflow = "hidden";
    timeline.to(trans.current, {
      duration: 1,
      x: 0,
      ease: Power4.easeOut,
      display: "none",
    });
  });
  return (
    <div>
      <div className="transition-effect" ref={trans}></div>
    </div>
  );
}

export default YellowBlank;
