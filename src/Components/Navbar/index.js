import { Button } from "@material-tailwind/react";
import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [show, setShow] = useState(false);

  const ref = useRef(null);
  const refNav = ref.current;

  const handleClick = (event) => {
    setIsClick((current) => !current);
    setShow((current) => !current);
  };

  const homeClick = () => {
    refNav.classLisst.add("hidden");
    // window.location.reload();
  };
  const aboutClick = () => {
    refNav.classLisst.add("hidden");
  };

  const contactClick = () => {
    refNav.classLisst.add("hidden");
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  return (
    <header className="bg-transparent absolute pt-8 pb-8 top-0 left-0 w-full flex z-10">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between relative ">
          {/* Logo */}
          <div className="block px-10">
            <Link
              to="/"
              className="font-bold text-2xl text-sky-400 block "
              onClick={homeClick}
            >
              Syafri Surya
            </Link>
          </div>
          {/* Button */}
          <div className="block px-10 md:hidden">
            <button
              className={isClick ? "hamburger-active z-[99999]" : ""}
              id="hamburger"
              onClick={handleClick}
            >
              <span className="hamburger-line transition duration-500 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-500 ease-in-out"></span>
              <span className="hamburger-line transition duration-500 ease-in-out origin-bottom-left"></span>
            </button>
          </div>
          {/* Nav-Full-Biru-Menu 380px*/}
          {/* FIXME:Error navbar motion slide in */}
          <div
            className={`absolute h-screen -top-8 right-0 bg-sky-600  shadow-lg  w-[80%] md:hidden 
            ${show ? "animate-datang" : "hidden"}`}
            id="nav-menu"
            ref={ref}
          >
            <div class="justify-between pt-8">
              <div className="px-10 md:hidden relative ">
                <button
                  className={
                    isClick
                      ? "hamburger-active z-[99999] absolute top-0 right-10 "
                      : ""
                  }
                  id="hamburger"
                  onClick={handleClick}
                >
                  <span className="hamburger-line-white transition duration-500 ease-in-out origin-top-left"></span>
                  <span className="hamburger-line-white transition duration-500 ease-in-out"></span>
                  <span className="hamburger-line-white transition duration-500 ease-in-out origin-bottom-left"></span>
                </button>
              </div>
              <div className="absolute top-[60%] left-10 transition-all duration-700 ease-in-out">
                <div class="flex flex-col gap-6">
                  <div>
                    <Link
                      to="/"
                      className="text-2xl uppercase text-white font-semibold tracking-widest"
                      onClick={homeClick}
                    >
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/about"
                      className="text-2xl uppercase text-white font-semibold tracking-widest"
                      onClick={aboutClick}
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/contact"
                      className="text-2xl uppercase text-white font-semibold tracking-widest"
                      onClick={contactClick}
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Navbar */}
          <div class="hidden px-10 md:block">
            <div className="navbar flex gap-20 font-amek text-xl tracking-wider ">
              <NavLink
                exact
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "outline-none border-transparent border-b-2 hover:border-sky-600 transition-all duration-700 navbar__link--active"
                    : "outline-none border-transparent border-b-2 hover:border-sky-600 transition-all duration-700 "
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="active"
                className={({ isActive }) =>
                  isActive
                    ? "outline-none border-transparent border-b-2 hover:border-sky-600 transition-all duration-700 navbar__link--active"
                    : "outline-none border-transparent border-b-2 hover:border-sky-600 transition-all duration-700 "
                }
                // className={({ isActive }) => "underline" + isActive ? " active" : ""}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "outline-none border-transparent border-b-2 hover:border-sky-600 transition-all duration-700 navbar__link--active"
                    : "outline-none border-transparent border-b-2 hover:border-sky-600 transition-all duration-700 "
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
