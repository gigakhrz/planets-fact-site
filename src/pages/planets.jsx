import { useState } from "react";
import { useParams } from "react-router-dom";
import source from "../../public/assets/icon-source.svg";
import planets from "../data/data.json";

export default function Main() {
  const [active, setActive] = useState("overview");
  const { name } = useParams();
  const planet = planets.find((p) => p.name.toLowerCase() === name);

  function forOverview() {
    const name = "overview";
    setActive(name);
  }
  function forStructure() {
    const name = "structure";
    setActive(name);
  }
  function forSurface() {
    const name = "surface";
    setActive(name);
  }

  return (
    <>
      <div className="flex flex-row justify-evenly items-center w-full px-6 pt-4  md:hidden">
        <div
          className="border-[#070724] border-b-4  cursor-pointer"
          style={{
            borderColor: active === "overview" ? planet.color : null,
          }}
        >
          <p
            onClick={forOverview}
            className="text-white font-[spartan] font-bold text-[9px]  leading-3 uppercase tracking-[2px]  pb-4 "
          >
            overview
          </p>
        </div>
        <div
          className="border-[#070724] border-b-4  cursor-pointer"
          style={{
            borderColor: active === "structure" ? planet.color : null,
          }}
        >
          <p
            onClick={forStructure}
            className="text-white font-[spartan] text-[9px] leading-3 uppercase tracking-[2px] font-bold pb-4"
          >
            structure
          </p>
        </div>
        <div
          className="border-[#070724] border-b-4 cursor-pointer"
          style={{
            borderColor: active === "surface" ? planet.color : null,
          }}
        >
          <p
            onClick={forSurface}
            className="text-white font-[spartan] text-[9px] leading-3 uppercase tracking-[2px] font-bold pb-4 "
          >
            surface
          </p>
        </div>
      </div>
      <div className="h-px bg-white opacity-20 w-full md:hidden"></div>

      <div className="flex flex-col absolute justify-center items-center px-6 pb-9 xl:px-40 xl:pt-20 xl:pb-[56px] xl:flex-row xl:justify-start xl:items-start ">
        <div className="h-[304px] xl:hidden md:h-[460px] flex flex-col justify-center items-center ">
          <img
            className=" w-1/2 md:w-3/4 xl:hidden  "
            src={
              active === "overview"
                ? planet.images.planet
                : active === "structure"
                ? planet.images.internal
                : active === "surface"
                ? planet.images.planet
                : null
            }
          />
          <img
            className="w-20  translate-y-2/3 md:w-40 md:translate-y-2/3 xl:w-40 absolute xl:translate-y-full "
            src={active === "surface" ? planet.images.geology : null}
          />
        </div>
        <div className="flex flex-col  justify-center  w-full  xl:mt-0  ">
          <div className="w-full flex justify-center   md:flex-row md:justify-between xl:flex-row ">
            <div className=" hidden  xl:w-full xl:h-[400px] xl:flex xl:flex-col xl:justify-center xl:items-center">
              <img
                className=" w-1/2  "
                src={
                  active === "overview"
                    ? planet.images.planet
                    : active === "structure"
                    ? planet.images.internal
                    : active === "surface"
                    ? planet.images.planet
                    : null
                }
              />
              <img
                className="w-40 absolute translate-y-3/4 "
                src={active === "surface" ? planet.images.geology : null}
              />
            </div>
            <div className="flex flex-row items-end xl:flex-col xl:w-4/5">
              <div className="md:w-[50%] xl:w-[75%] ">
                <h1
                  className="text-10 font-[antonio, sans-serif] uppercase text-white text-center font-normal leading-[52px] md:text-5xl md:leading-[62px] md:text-left 
                xl:text-left xl:text-[80px] xl:leading-[104px]"
                >
                  {planet.name}
                </h1>
                <p
                  className="text-[#FFFFFF] font-[spartan] text-xs leading-6 font-normal text-center mt-4 md:text-left
                 xl:text-left xl:mt-6 xl:text-xs xl:leading-6"
                >
                  {active === "overview"
                    ? planet.overview.content
                    : active === "structure"
                    ? planet.structure.content
                    : active === "surface"
                    ? planet.geology.content
                    : null}
                </p>
                <div className="flex flex-row justify-center items-center mt-8 w-full md:justify-start  xl:mt-6">
                  <p className="ml-px text-white text-xs leading-6 opacity-50 ">
                    Source:
                  </p>
                  <a
                    href={
                      active === "overview"
                        ? planet.overview.source
                        : active === "structure"
                        ? planet.structure.source
                        : active === "surface"
                        ? planet.geology.source
                        : null
                    }
                    className="ml-px text-white text-xs leading-6 opacity-50 md:text-left  xl:text-xs xl:leading-6 underline "
                  >
                    Wikipedia
                  </a>
                  <img src={source} className="w-3 h-3 ml-2" />
                </div>
              </div>
              <div className=" hidden  md:block md:w-1/2 md:pl-16  xl:w-3/4  xl:pl-0">
                <div
                  onClick={forOverview}
                  className="flex flex-row items-center w-full px-6 pt-2 pb-3 border border-solid mt-2 py-2
              pl-5 pr-40  cursor-pointer  hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:mix-blend-normal "
                  style={{
                    backgroundColor:
                      active === "overview" ? planet.color : null,
                  }}
                >
                  <p
                    className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-[16px] font-[spartan] mix-blend-normal 
                  md:text-[9px] md:leading-[25px] md:tracking-[1.9px] xl:text-[12px] xl:leading-[25px] xl:tracking-[2.5px]"
                  >
                    01
                  </p>
                  <p
                    className="text-white font-[antonio] font-normal uppercase text-lg leading-7 pl-4 md:text-[9px] md:leading-6 tracking-[2px]
                  xl:text-xs xl:leading-6 xl:tracking-[2.5px] "
                  >
                    overview
                  </p>
                </div>
                <div
                  onClick={forStructure}
                  className="flex flex-row items-center w-full px-6 pt-2 pb-3  border border-solid mt-2 py-2
              pl-5 pr-20 hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:mix-blend-normal  cursor-pointer"
                  style={{
                    backgroundColor:
                      active === "structure" ? planet.color : null,
                  }}
                >
                  <p
                    className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-4 font-[spartan] mix-blend-normal 
                  md:text-[9px] md:leading-6 md:tracking-[1.9px] xl:text-xs xl:leading-6 xl:tracking-[2.5px]"
                  >
                    02
                  </p>
                  <p
                    className="text-white font-[antonio] font-normal uppercase text-xl leading-7 pl-4 md:text-[9px] md:leading-6 tracking-[1.9px]
                  xl:text-xs xl:leading-6 xl:tracking-[2.5px] "
                  >
                    Internal Structure
                  </p>
                </div>
                <div
                  onClick={forSurface}
                  className="flex flex-row px-6 pt-2 pb-3  pl-5 pr-24 items-center  w-full border border-solid mt-2 py-2
               hover:bg-[#D8D8D8] hover:bg-opacity-20 hover:mix-blend-normal  cursor-pointer "
                  style={{
                    backgroundColor: active === "surface" ? planet.color : null,
                  }}
                >
                  <p
                    className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-4 font-[spartan] mix-blend-normal 
                  md:text-[9px] md:leading-6 md:tracking-[1.9px] xl:text-xs xl:leading-6 xl:tracking-[2.5px]"
                  >
                    03
                  </p>
                  <p
                    className="text-white font-[antonio] font-normal uppercase text-xl leading-7 pl-4 md:text-[9px] md:leading-6 tracking-[1.9px] 
                  xl:text-xs xl:leading-6 xl:tracking-[2.5px] "
                  >
                    Surface Geology
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-5 md:flex-row md:justify-between xl:mt-20">
            <div
              className="flex flex-row px-6 pt-2 pb-3 justify-between items-center  border border-solid mt-2
            md:flex-col md:pt-4 md:pb-5 md:pl-4 md:justify-start md:pr-0 md:items-start  md:mt-0 md:w-[24%]
            xl:pt-5 xl:pb-7 xl:pl-6 "
            >
              <p
                className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-4 font-[spartan] mix-blend-normal md:text-left
              xl:text-xs xl:leading-6 xl:tracking-[1px]"
              >
                Rotation time
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-xl leading-7
               md:text-2xl md:leading-8 md:tracking-[0.9px]
               xl:text-[40px] xl:leading-[52px] xl:tracking-[-1.5px] "
              >
                58.6 days
              </p>
            </div>
            <div
              className="flex flex-row px-6 pt-2 pb-3 justify-between items-center  border border-solid mt-2
            md:flex-col md:pt-4 md:pb-5 md:pl-4 md:justify-start md:pr-0 md:items-start  md:mt-0  md:w-[24%]
            xl:pt-5 xl:pb-7 xl:pl-6  "
            >
              <p
                className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-4 font-[spartan] mix-blend-normal md:text-left
              xl:text-xs xl:leading-6 xl:tracking-[1px]"
              >
                REVOLUTION TIME
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-xl leading-7
               md:text-2xl md:leading-8 md:tracking-[0.9px]
               xl:text-[40px] xl:leading-[52px] xl:tracking-[-1.5px]  "
              >
                87.97 days
              </p>
            </div>
            <div
              className="flex flex-row px-6 pt-2 pb-3 justify-between items-center  border border-solid mt-2
            md:flex-col md:pt-[16px] md:pb-[19px] md:pl-[15px] md:justify-start md:pr-[0px] md:items-start ] md:mt-[0px] ] md:w-[24%]
            xl:pt-[20px] xl:pb-[27px] xl:pl-[23px]  "
            >
              <p
                className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-4 font-[spartan] mix-blend-normal md:text-left
                xl:text-xs xl:leading-6 xl:tracking-[1px]
              "
              >
                radius
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-xl leading-7
               md:text-2xl md:leading-8 md:tracking-[0.9px] 
               xl:text-[40px] xl:leading-[52px] xl:tracking-[-1.5px] "
              >
                2,439.7 km
              </p>
            </div>
            <div
              className="flex flex-row px-6 pt-2 pb-3 justify-between items-center  border border-solid mt-2
            md:flex-col md:pt-4 md:pb-5 md:pl-4 md:justify-start md:pr-0 md:items-start  md:mt-0 ] md:w-[24%]
            xl:pt-5 xl:pb-7 xl:pl-6 "
            >
              <p
                className="uppercase opacity-50  text-white tracking-[0.7px] text-[8px] leading-4 font-[spartan] mix-blend-normal md:text-left
              xl:text-xs xl:leading-6 xl:tracking-[1px]"
              >
                AVERAGE TEMP.
              </p>
              <p
                className="text-white font-[antonio] font-normal uppercase  tracking-[-0.75px] text-xl leading-7
               md:text-2xl md:leading-8 md:tracking-[0.9px]
               xl:text-[40px] xl:leading-[52px] xl:tracking-[-1.5px]  "
              >
                430°c
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
