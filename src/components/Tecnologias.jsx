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
    <section className="min-h-[90vh] flex flex-col justify-center items-center">
      <div className="w-[80%] mx-auto h-full text-white   ">
        <h2 className="text-white font-bold text-4xl ">Tecnologias que manejo</h2>
        <div className="tecnologias  justify-normal gap-5 mt-8 w-[90%] mx-auto">
          <div className=" h-[150px] p-2  bg-[#334D66] rounded-lg">
            <FaHtml5></FaHtml5>
            <h4>HTML</h4>
            <span>Lenguaje JavaScript</span>
          </div>
          <div className=" h-[150px] p-2  bg-[#334D66] rounded-lg">
            <FaCss3Alt/>
            <h4>CSS</h4>
            <span>Lenguaje JavaScript</span>
          </div>
          <div className=" h-[150px] p-2  bg-[#334D66] rounded-lg">
            <IoLogoJavascript/>
            <h4>JAVACRIPT</h4>
            <span>Lenguaje JavaScript</span>
          </div>
          <div className=" h-[150px] p-2  bg-[#334D66] rounded-lg">
            <FaReact/>
            <h4>REACT</h4>
            <span>Lenguaje JavaScript</span>
          </div>
          <div className="h-[150px] p-2  bg-[#334D66] rounded-lg">
            <p>image</p>
            <h4>REDUX</h4>
            <span>Lenguaje JavaScript</span>
          </div>
          <div className=" h-[150px] p-2  bg-[#334D66] rounded-lg">
            <FaNode/>
            <h4>NODE.JS</h4>
            <span>Lenguaje JavaScript</span>
          </div>
          <div className="h-[150px] p-2  bg-[#334D66] rounded-lg">
            <p>image</p>
            <h4>TYPESCRIPT</h4>
            <span>Lenguaje JavaScript</span>
          </div>
          <div className="h-[150px] p-2  bg-[#334D66] rounded-lg">
            <p>image</p>
            <h4>EXPREESS</h4>
            <span>Lenguaje JavaScript</span>
          </div>
          <div className="h-[150px] p-2  bg-[#334D66] rounded-lg">
            <p>image</p>
            <h4>POSGRESS</h4>
            <span>Lenguaje JavaScript</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
