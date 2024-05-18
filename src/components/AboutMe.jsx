import React from "react";
import Imagen from "../Images/Oro.jpeg";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const AboutMe = () => {
  return (
    <section className="h-[70vh] max-sm:h-[65vh] max-lg:h-[50vh]  max-md:h-[60vh] ">
      <div className="w-[80%] mx-auto max-lg:w-[90%] ">
        <h2 className="dark:text-white text-5xl font-[Lato] font-[900] max-sm:text-2xl max-lg:text-center max-lg:text-4xl">
          Sobre mi
        </h2>
        <div className=" grid grid-cols-2 gap-10 mt-8 w-[90%] mx-auto max-sm:grid-cols-1 max-sm:gap-2.5 max-lg:grid-cols-[1fr,300px] max-md:grid-cols-[1fr,200px]">
          <div className="dark:text-white flex flex-col justify-evenly py-4">
            <h3 className="text-5xl font-[Lato] font-[700] w-[60%] leading-[1.2] max-sm:w-[90%] max-sm:text-2xl max-lg:text-3xl">
              I'm Christian Peña Yañez
            </h3>
            <p className="text-[#a7a8a9] font-[Roboto] font-[300] max-sm:my-2">
              Desarrollador Front end
            </p>
            <p className="font-[Roboto] font-[300] max-lg:my-2">
              Me encanta aprender y enseñar sobre la tecnologia. Me apasiona el
              desarrollo web he trabajado en multiples proyectos personales,
              busco mi primer oportunidad laboral
            </p>

            <button
              className="py-2 px-9 bg-[#1a2123] border-[#333c43] border-2 
            rounded-md w-1/2 flex justify-center items-center gap-2 font-[Roboto] font-[400] text-white max-md:mt-3 max-sm:w-[80%] max-sm:mx-auto max-lg:w-full"
            >
              Mas informacion
              <LiaExternalLinkSquareAltSolid />
            </button>
          </div>
          <div className="flex justify-center items-center max-sm:order-first">
            <img
              src={`${Imagen}`}
              className="max-md:w-full max-md:h-[250px]  rounded-2xl max-sm:w-[150px] max-sm:h-[150px] max-sm:rounded-full max-sm:mx-auto max-lg:h-[250px] w-[750px] h-[350px]
            "
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
