import { Link } from "react-router-dom";
import buttonMobile from "../../public/assets/icon-hamburger.svg";
import { useState, useEffect } from "react";
import arrow from "../../public/assets/icon-chevron.svg";

export default function Header() {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(buttonMobile);

  function show() {
    setActive(!active);
    if (active) {
      setMenu(buttonMobile);
    } else {
      setMenu(close);
    }
  }

  return (
    <>
      <div
        className="flex w-full justify-between md:justify-center md:flex-col items-center px-6 pt-4 md:px-14 pb-4 md:pb-5 xl:pt-0
      xl:flex-row  xl:pr-10 xl:pb-7 xl:pl-8 xl:items-center  xl:justify-evenly  z-20 md:pt-8 relative"
        style={{ position: active ? "fixed" : "relative" }}
      >
        <h1 className="text-[#FFFFFF] font-[antonio, sans-serif] text-3xl leading-9 font-normal tracking-[-1px] w-full md:text-center xl:text-left xl:mt-4">
          THE PLANETS
        </h1>
        <div className=" hidden  md:w-full  md:justify-evenly md:items-center  md:inline-flex md:mt-10  xl:mt-0 ">
          <div className="flex flex-col border-t-4 hover:border-[#419EBB]   border-[#070724] ">
            <Link
              to="/planets/mercury"
              className="text-xs text-white font-[spartan] font-bold tracking-[1px] uppercase leading-6  xl:mt-6
            "
            >
              mercury
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#419EBB]   border-[#070724]">
            <Link
              to="/planets/venus"
              className="text-xs text-white font-[spartan] font-bold tracking-[1px] uppercase leading-6  xl:mt-6
            "
            >
              venus
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#6D2ED5]   border-[#070724]">
            <Link
              to="/planets/earth"
              className="text-xs text-white font-[spartan] font-bold tracking-[1px] uppercase leading-6  xl:mt-6"
            >
              earth
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#D14C32]   border-[#070724]">
            <Link
              to="/planets/mars"
              className="text-xs text-white font-[spartan] font-bold tracking-[1px] uppercase leading-6  xl:mt-6"
            >
              mars
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#D83A34]   border-[#070724]">
            <Link
              to="/planets/jupiter"
              className="text-xs text-white font-[spartan] font-bold tracking-[1px] uppercase leading-6  xl:mt-6"
            >
              jupiter
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#CD5120]   border-[#070724]">
            <Link
              to="/planets/saturn"
              className="text-xs text-white font-[spartan] font-bold tracking-[1px] uppercase leading-6  xl:mt-6"
            >
              saturn
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#1EC1A2]   border-[#070724]">
            <Link
              to="/planets/uranus"
              className="text-xs text-white font-[spartan] font-bold tracking-[1px] uppercase leading-6  xl:mt-6"
            >
              uranus
            </Link>
          </div>
          <div className="flex flex-col border-t-4 hover:border-[#2D68F0]   border-[#070724]">
            <Link
              to="/planets/neptune"
              className="text-xs text-white font-[spartan] font-bold tracking-[1px] uppercase leading-6  xl:mt-6"
            >
              neptune
            </Link>
          </div>
        </div>

        <img
          onClick={show}
          src={menu}
          className=" cursor-pointer md:hidden "
          alt="button"
        />
      </div>
      <div className="h-px opacity-20 mix-blend-normal  xl:top-16 xl:z-20 xl:absolute w-full bg-white"></div>
      {active ? (
        <div className="  fixed top-0 z-10  w-full  h-screen md:hidden bg-[#070724] 	">
          <div className=" px-6  w-full  ">
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-16"></div>
            <div className="flex items-center flex-row justify-between w-full mt-5  ">
              <div className="flex items-center justify-center">
                <div className="bg-[#DEF4FC] w-5 h-5 rounded-full"></div>
                <Link
                  to="/planets/mercury"
                  onClick={show}
                  className="text-white font-[spartan] ml-6 font-bold tracking-[1.3px] uppercase text-base leading-6"
                >
                  mercury
                </Link>
              </div>
              <Link to="/planets/mercury">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-6"></div>
            <div className="flex items-center flex-row justify-between w-full mt-5">
              <div className="flex items-center justify-center">
                <div className="bg-[#F7CC7F] w-5 h-5 rounded-full"></div>
                <Link
                  to="/planets/venus"
                  onClick={show}
                  className="text-white font-[spartan] ml-6 font-bold tracking-[1.3px] uppercase text-base leading-6"
                >
                  venus
                </Link>
              </div>
              <Link to="/planets/venus">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-6"></div>

            <div className="flex items-center flex-row justify-between w-full mt-5">
              <div className="flex items-center justify-center">
                <div className="bg-[#545BFE] w-5 h-5 rounded-full"></div>
                <Link
                  to="/planets/earth"
                  onClick={show}
                  className="text-white font-[spartan] ml-6 font-bold tracking-[1.3px] uppercase text-base leading-6"
                >
                  earth
                </Link>
              </div>
              <Link to="/planets/earth">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-6"></div>

            <div className="flex items-center flex-row justify-between w-full mt-5">
              <div className="flex items-center justify-center">
                <div className="bg-[#FF6A45] w-5 h-5 rounded-full"></div>
                <Link
                  to="/planets/mars"
                  onClick={show}
                  className="text-white font-[spartan] ml-6 font-bold tracking-[1.3px] uppercase text-base leading-6"
                >
                  mars
                </Link>
              </div>
              <Link to="/planets/mars">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-6"></div>

            <div className="flex items-center flex-row justify-between w-full mt-5">
              <div className="flex items-center justify-center">
                <div className="bg-[#ECAD7A] w-5 h-5 rounded-full"></div>
                <Link
                  to="/planets/jupiter"
                  onClick={show}
                  className="text-white font-[spartan] ml-6 font-bold tracking-[1.3px] uppercase text-base leading-6"
                >
                  jupiter
                </Link>
              </div>
              <Link to="/planets/jupiter">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-6"></div>

            <div className="flex items-center flex-row justify-between w-full mt-5">
              <div className="flex items-center justify-center">
                <div className="bg-[#FCCB6B] w-5 h-5 rounded-full"></div>
                <Link
                  to="/planets/saturn"
                  onClick={show}
                  className="text-white font-[spartan] ml-6 font-bold tracking-[1.3px] uppercase text-base leading-6"
                >
                  saturn
                </Link>
              </div>
              <Link to="/planets/saturn">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-6"></div>

            <div className="flex items-center flex-row justify-between w-full mt-5">
              <div className="flex items-center justify-center">
                <div className="bg-[#FCCB6B] w-5 h-5 rounded-full"></div>
                <Link
                  to="/planets/uranus"
                  onClick={show}
                  className="text-white font-[spartan] ml-6 font-bold tracking-[1.3px] uppercase text-base leading-6"
                >
                  uranus
                </Link>
              </div>
              <Link to="/planets/uranus">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-6"></div>

            <div className="flex items-center flex-row justify-between w-full mt-5">
              <div
                className="flex items-cent
          
          er justify-center"
              >
                <div className="bg-[#497EFA] w-5 h-5 rounded-full"></div>
                <Link
                  to="/planets/neptune"
                  onClick={show}
                  className="text-white font-[spartan] ml-6 font-bold tracking-[1.3px] uppercase text-base leading-6"
                >
                  neptune
                </Link>
              </div>
              <Link to="/planets/neptune">
                <img onClick={show} src={arrow} alt="arrow button" />
              </Link>
            </div>
            <div className="h-px opacity-10 mix-blend-normal w-full bg-white mt-6"></div>
          </div>
        </div>
      ) : null}
    </>
  );
}
