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
  SiPostgresql,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Tecnologias = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center py-4">
      <div className="w-[80%] mx-auto h-full text-white  max-sm:w-[90%] ">
        <h2 className="text-white font-[Lato] font-[900] text-5xl max-sm:text-2xl max-sm:text-center max-lg:text-3xl text-center">
          Tecnologias
        </h2>
        <div className="tecnologias  justify-normal gap-5 mt-8 w-[90%] mx-auto ">
          <div className=" h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2 rounded-lg">
            <FaHtml5 className="text-3xl"></FaHtml5>
            <div className="mt-2">
              <h4>HTML</h4>
              <span className="text-[#848486]">Lenguaje JavaScript</span>
            </div>
          </div>
          <div className=" h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2 rounded-lg">
            <FaCss3Alt className="text-3xl" />
            <div className="mt-2">
              <h4>CSS</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className=" h-[150px] p-3 bg-[#1a2123] border-[#333c43] border-2  rounded-lg">
            <SiTailwindcss className="text-3xl" />
            <div className="mt-2">
              <h4>TAILWIND CSS</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className=" h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2 rounded-lg">
            <IoLogoJavascript className="text-3xl" />
            <div className="mt-2">
              <h4>JAVACRIPT</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className=" h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2  rounded-lg">
            <FaReact className="text-3xl" />
            <div className="mt-2">
              <h4>REACT</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className="h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2  rounded-lg">
            <SiRedux className="text-3xl" />
            <div className="mt-2">
              <h4>REDUX</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className=" h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2  rounded-lg">
            <FaNode className="text-3xl" />
            <div className="mt-2">
              <h4>NODE.JS</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className="h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2  rounded-lg">
            <SiTypescript className="text-3xl" />
            <div className="mt-2">
              <h4>TYPESCRIPT</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className="h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2  rounded-lg">
            <SiExpress className="text-3xl" />
            <div className="mt-2">
              <h4>EXPRESS</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className="h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2  rounded-lg">
            <SiPostgresql className="text-3xl" />
            <div className="mt-2">
              <h4>POSGRESS</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
          <div className="h-[150px] p-3  bg-[#1a2123] border-[#333c43] border-2  rounded-lg">
            <SiSequelize className="text-3xl" />
            <div className="mt-2">
              <h4>SEQUELIZE</h4>
              <span>Lenguaje JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
