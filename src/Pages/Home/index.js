import React, { useRef, useEffect } from "react";
import { Card, Hero, Transition, YellowBlank } from "../../Components";
import gsap from "gsap";
const Home = () => {
  const home = gsap.timeline();
  const homeh1 = useRef(null);

  useEffect(() => {
    document.title = "Syafri Surya - Frontend Developer";
    home.from(
      homeh1.current,
      {
        duration: 1,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      "-=3.5"
    );
  });
  return (
    <>
      <YellowBlank timeline={home} />
      <Transition timeline={home} />
      {/* <div ref={homeh1}> */}
      <section id="home" className="pt-16">
        <Hero />
        <Card />
        <div className="mb-96"></div>
      </section>
      {/* </div> */}
    </>
  );
};

export default Home;
