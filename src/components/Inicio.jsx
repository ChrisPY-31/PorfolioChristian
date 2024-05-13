import React from "react";
import ImagenLogo from '../Images/TvMovies2.png'

const Inicio = () => {
  return (
    <main className="h-[95vh] flex justify-center items-center">
      <div className="w-[80%] mx-auto grid grid-cols-2 gap-10 mt-20 ">
        <img src={`${ImagenLogo}`} className="w-[750px] h-[350px] rounded-2xl" alt="" />
        <div className="text-white flex flex-col justify-around py-3">
          <h1 className="text-5xl font-[Lato] font-[700] w-[60%] leading-[1.2]">Hey there! I'm Christian Peña Yañez</h1>       
          <p className="font-[Roboto] font-[300]">I´m programador Front end in Globant with a passion for creating thoughtful, intuitive experiences </p>
          <div className="flex gap-4">
            <a className="py-2 px-9 bg-[#333333] font-[Roboto] font-[400] rounded-xl">Linkedin</a>
            <a className="py-2 px-9 bg-indigo-600  rounded-xl font-[Roboto] font-[400]">Descargar curriculum</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inicio;
