import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Transition, YellowBlank } from "../../Components";
const Contact = () => {
  // latitude : -7.620484766170753
  // longitude : 111.92120404661097
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  useEffect(() => {
    document.title = "Contact - Syafri Surya";
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
      <div className="container py-32 lg:py-52">
        <div class="w-full px-8 md:max-w-2xl lg:max-w-6xl xl:max-w-full ">
          <div class="mx-auto lg:max-w-xl lg:mx-0">
            <h1 className="text-5xl font-bold ">Get In Touch</h1>
            <p className="my-8 text-2xl lg:text-3xl">
              Whether you just want to give a shout out or are looking to start
              a project, feel free to email & we'll quickly be in touch.
            </p>
          </div>
          <div className="flex flex-wrap flex-col mt-20 gap-14 lg:flex-row xl:gap-32">
            <div className="justify-start">
              <h4 className="text-xl font-bold text-slate-400 mb-2">
                Email Me
              </h4>
              <h1 className="text-2xl font-bold text-sky-700">
                syafrisurya@gmail.com
              </h1>
            </div>
            <div className="justify-start">
              <h4 className="text-xl font-bold text-slate-400 mb-2">
                Call Me / WA
              </h4>
              <h1 className="text-2xl font-bold text-sky-700">
                +6282257787559
              </h1>
            </div>
            <div className="justify-start">
              <h4 className="text-xl font-bold text-slate-400 mb-2 lg:text-slate-600">
                DM to Instagram
              </h4>
              <h1 className="text-2xl font-bold text-sky-700 lg:text-sky-600">
                @msyafrisurya
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
