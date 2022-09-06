import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Transition, YellowBlank } from "../../Components";
import Me from "../../img/me/1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
const About = () => {
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  useEffect(() => {
    document.title = "About - Syafri Surya";
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
      {/* <Reverse timeline={home} /> */}
      <YellowBlank timeline={home} />
      <Transition timeline={home} />
      {/* <div ref={homeh1}> */}
      <div className="container pt-32 pb-32 xl:my-14 relative block">
        <div className="w-full px-4 xl:flex xl:flex-row">
          <div className="max-w-[90%] mx-auto md:max-w-[80%] lg:max-w-[70%] xl:w-1/2 overflow-hidden">
            <div className="w-full shadow-lg flex ">
              <img
                src={Me}
                alt=""
                className="inline mx-auto w-[100%] object-cover xl:px-8 xl:my-auto"
              />
            </div>
          </div>
          <div className="max-w-[90%] flex justify-center flex-col mx-auto mt-10 sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-left xl:w-1/2 xl:mt-0 ">
            <div className="p-4  ">
              <h4 className="text-xl font-semibold text-slate-700 xl:text-2xl">
                Syafri Surya Muzaim
              </h4>
              <h1 className="text-5xl font-bold my-3 mb-10 xl:text-6xl">
                Frontend Developer
              </h1>
              <p className="text-xl tracking-wider leading-9 font-medium text-slate-900">
                Creative Front-End Developer offering 7+ years of experience
                providing high-impact web solutions for diverse industry
                organizations. Skilled in designing, developing and testing
                multiple web-based applications incorporating a range of
                technologies. Aspiring to combine broad background with strong
                technical skills to excel as a Front-End Developer.
              </p>
            </div>
            <div className="p-4  ">
              <h1 className="text-xl font-semibold xl:text-2xl">
                What Can I Do?
              </h1>
              <ul className="">
                <li className="flex items-center gap-3 my-2">
                  <FontAwesomeIcon icon={faCircle} className="text-sm mr-3" />
                  <span className="p-0 text-xl font-medium">
                    React JS (state management, reusable component, etc.)
                  </span>
                </li>
                <li className="flex items-center gap-3  my-2">
                  <FontAwesomeIcon icon={faCircle} className="text-sm mr-3" />
                  <span className="p-0 text-xl font-medium">
                    Slicing Web (XD, FIGMA, PSD, AI, etc.) to HTML Responsive
                  </span>
                </li>
                <li className="flex items-center gap-3  my-2">
                  <FontAwesomeIcon icon={faCircle} className="text-sm mr-3" />
                  <span className="p-0 text-xl font-medium">
                    Slicing App (XD, FIGMA, PSD, AI, etc.) to Flutte
                  </span>
                </li>
                <li className="flex items-center gap-3  my-2">
                  <FontAwesomeIcon icon={faCircle} className="text-sm mr-3" />
                  <span className="p-0 text-xl font-medium">
                    Bootstrap, Tailwind, Material Design Etc.
                  </span>
                </li>
                <li className="flex items-center gap-3  my-2">
                  <FontAwesomeIcon icon={faCircle} className="text-sm mr-3" />
                  <span className="p-0 text-xl font-medium">
                    UI/UX Design for Website & Application
                  </span>
                </li>
                <li className="flex items-center gap-3 my-2 ">
                  <FontAwesomeIcon icon={faCircle} className="text-sm mr-3" />
                  <span className="p-0 text-xl font-medium">
                    Web design complete with JQuery
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default About;
