import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Superspring from "../../img/projects/superspring-500x500.jpg";
import Imin from "../../img/projects/imin-500x1000.jpg";
import Flexfit from "../../img/projects/flexfit-500x500.jpg";
import Danafix from "../../img/projects/danafix-1000x1000.jpg";
import DAI from "../../img/projects/holdmyledgerdao-500x500.jpg";
import PMP from "../../img/projects/pmp-dikdasmen-500x500.jpg";
import Rkas from "../../img/projects/rkas-500x500.jpg";
import Fins from "../../img/projects/fins-recipe-500x500.jpg";
import Unreleased from "../../img/projects/unreleased-500x500.jpg";
import KelasKiwari from "../../img/projects/kelaskiwari-500x500.jpg";
import Shihan from "../../img/projects/shinhan-sekuritas-500x500.jpg";
import Mobilku from "../../img/projects/mobilku-500x500.jpg";
import Trust from "../../img/projects/trust-sekuritas-500x500.jpg";
import MSP from "../../img/projects/msp-medical-500x500.jpg";

const ProjectGrid = () => {
  const home = gsap.timeline();
  const homeh1 = useRef(null);
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
    <div className="container pt-36 pb-6 mx-auto md:pt-48 lg:pt-52 ">
      <div className="w-full px-8">
        <div class="grid grid-cols-1 gap-4 content-start  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* START CARD */}
          {/* Card 1 */}
          <div className="w-full h-auto cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Superspring}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white w-full">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold text-2xl">Superspring</h1>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full bg-contain cursor-pointer sm:row-span-2 bg-transparent">
            <div className="relative overflow-hidden border-transparent ">
              {/* sm:h-[576px] md:h-[465px] lg:h-[475px] xl:h-[728px] */}
              <img
                src={Imin}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95 h-auto"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">WORDPRESS</h4>
                <h1 className="font-bold  text-2xl">IMIN</h1>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full h-auto  cursor-pointer ">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Flexfit}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">Flexfit</h1>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full h-auto cursor-pointer sm:col-span-2 md:row-start-3 md:row-span-2 lg:row-start-2 lg:col-start-3 lg:col-span-2 lg:row-span-2 ">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Danafix}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">REACT JS</h4>
                <h1 className="font-bold  text-2xl">Danafix</h1>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="w-full h-auto cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={DAI}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">REACT JS</h4>
                <h1 className="font-bold  text-2xl">Hold My Ledger DAO</h1>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="w-full h-auto cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={PMP}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">PMP Dikdasmen</h1>
              </div>
            </div>
          </div>
          {/* Card 7 */}
          <div className="w-full h-auto  cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Rkas}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">RKAS</h1>
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="w-full h-auto  cursor-pointer ">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Fins}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">Fins Recipe</h1>
              </div>
            </div>
          </div>
          {/* Card 9*/}
          <div className="w-full h-auto cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Unreleased}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">Unreleased</h1>
              </div>
            </div>
          </div>
          {/* Card 10*/}
          <div className="w-full h-auto  cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={KelasKiwari}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">Kelas Kiwari</h1>
              </div>
            </div>
          </div>
          {/* Card 11*/}
          <div className="w-full h-auto cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Shihan}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">Shihan</h1>
              </div>
            </div>
          </div>
          {/* Card 12*/}
          <div className="w-full h-auto cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Mobilku}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">Mobilku</h1>
              </div>
            </div>
          </div>
          {/* Card 13*/}
          <div className="w-full h-auto cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={Trust}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">Trust</h1>
              </div>
            </div>
          </div>
          {/* Card 14*/}
          <div className="w-full h-auto cursor-pointer">
            <div className="relative overflow-hidden border-transparent">
              <img
                src={MSP}
                alt=""
                className="hover:scale-110 transition-all duration-500 brightness-75 hover:brightness-95"
              />
              <div className="absolute bottom-5 pl-10 pb-4 text-white">
                <h4 className="text-lg tracking-wider">HTML</h4>
                <h1 className="font-bold  text-2xl">MSP Medical</h1>
              </div>
            </div>
          </div>
          {/* END CARD */}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
