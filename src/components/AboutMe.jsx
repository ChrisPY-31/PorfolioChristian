import React from "react";

const AboutMe = () => {
  return (
    <section className="h-[100vh] flex justify-center items-center relative">
      <h2 className="absolute text-white 3xl z-10 left-[150px] top-[100px] font-semibold text-4xl">Acerca de mi</h2>
      <div className="w-[80%] h-[60%] mx-auto grid grid-cols-2 justify-items-center items-center" >
        <div className="text-white h-[50vh] w-[80%] mx-auto py-10 flex flex-col justify-around">
          <p>
            Desarrollador Front End autodidacta en busca de su primer
            oportunidad laboral.
          </p>
          <p>Estudios</p>
          <p>Unidad Academica Profesional de Tianguistenco <span>UAEMex</span></p>
          <p>Soy henry bootcamp</p>
          <div className="flex gap-2 w-1/2 justify-around items-center">
            <p className="bg-blue-500 py-2 px-8 rounded-md">linkedin</p>
            <p className="bg-red-500 py-2 px-8 rounded-md">GitHub</p>
          </div>
        </div>
        <div >
          <div className="h-[400px] w-[400px] bg-red-500"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
