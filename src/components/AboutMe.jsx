import React from "react";
import Imagen from "../Images/Oro.jpeg";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";


const AboutMe = () => {
  return (
    <section className="h-[70vh] max-sm:h-[75vh] ">
      <div className="w-[80%] mx-auto max-sm:w-[90%]">
        <h2 className="dark:text-white text-5xl font-[Lato] font-[900] max-sm:text-2xl max-sm:text-center">Sobre mi</h2>
        <div className=" grid grid-cols-2 gap-10 mt-8 w-[90%] mx-auto max-sm:grid-cols-1 max-sm:gap-2.5">
          <div className="dark:text-white flex flex-col justify-evenly py-4">
            <h3 className="text-5xl font-[Lato] font-[700] w-[60%] leading-[1.2] max-sm:w-[90%] max-sm:text-2xl">
              I'm Christian Peña Yañez
            </h3>
            <p className="text-[#a7a8a9] font-[Roboto] font-[300] max-sm:my-2">
              Desarrollador Front end 
            </p>
            <p className="font-[Roboto] font-[300]">Me encanta aprender y enseñar sobre la tecnologia. Me apasiona el desarrollo web he trabajado en multiples proyectos personales, busco mi primer oportunidad laboral</p>

            <button className="py-2 px-9 bg-[#1a2123] border-[#333c43] border-2 
            rounded-md w-1/2 flex justify-center items-center gap-2 font-[Roboto] font-[400] text-white max-sm:mt-3 max-sm:w-[80%] max-sm:mx-auto">
              Mas informacion
              <LiaExternalLinkSquareAltSolid />
            </button>
          </div>
          <img
            src={`${Imagen}`}
            className="md:w-[750px] md:h-[350px] rounded-2xl max-sm:w-[150px] max-sm:h-[150px] max-sm:order-first max-sm:rounded-full max-sm:mx-auto"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
