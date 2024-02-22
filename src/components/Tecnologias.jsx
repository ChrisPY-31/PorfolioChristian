import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt, FaReact, FaNode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Tecnologias = () => {
  return (
    <section className="h-[90vh] ">
      <div className="w-[80%] mx-auto h-full text-white">
        <h2 className=" text-white 3xl z-10 left-[150px] top-[100px] font-semibold text-4xl">
          Tecnologias
        </h2>
        <div className="grid grid-cols-2 justify-items-center h-full gap-10 items-center w-[80%] mx-auto ">
          <div className="rounded-lg bg-[#0b0b13] w-[90%] h-[65%] py-3">
            <p className="text-center text-4xl font-medium">Front end</p>
            <div className="w-[85%] mx-auto grid grid-cols-3 justify-items-center items-center min-h-[90%] text-[#24b8b8e6]">
              <FaHtml5 className="h-14 w-14  "/>
              <FaCss3Alt className="h-14 w-14 " />
              <IoLogoJavascript className="h-14 w-14" />
              <SiTypescript className="h-14 w-14"/>
              <FaReact className="h-14 w-14"/>
              <SiRedux className="h-14 w-14"/>
              <SiTailwindcss className="h-14 w-14"/>
            </div>
          </div>
          <div className="bg-[#0b0b13] rounded-lg w-full h-[65%] py-3">
            <p className="text-center text-4xl font-medium">Back end</p>
            <div className="w-[85%] mx-auto grid grid-cols-3 justify-items-center items-center min-h-[90%] text-[#24b8b8e6]">
              <SiExpress className="h-14 w-14"/>
              <SiSequelize className="h-14 w-14" />
              <FaNode className="h-14 w-14"/>
              <BiLogoPostgresql className="h-14 w-14"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
