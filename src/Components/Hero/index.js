import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  const Navigate = useNavigate();

  const talkClick = () => {
    Navigate("/contact");
  };

  useEffect(() => {
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
      <div className="container pt-32 pb-6">
        <div className="w-full px-8 ">
          <h1 className="text-5xl font-bold mb-2 w-full xl:text-6xl">
            Hello, I'm Syafri.
          </h1>
          <h1 className="text-5xl font-bold w-full sm:w-full xl:text-6xl">
            A Frontend Developer.
          </h1>
          <h1 className="mt-10 font-normal text-lg tracking-wide md:text-xl xl:text-2xl">
            Wanna get in touch?{" "}
            <span
              className="font-semibold cursor-pointer hover:text-sky-400 transition duration-400"
              onClick={talkClick}
            >
              Let's talk
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
