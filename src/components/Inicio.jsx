import React from "react";

const Inicio = () => {
  return (
    <main className="h-[90vh] flex justify-center items-center">
      <div className="w-[80%] mx-auto h-[70%] flex justify-between gap-10">
        <div className="w-[50%] text-white">
          <div className="w-[80%] mx-auto py-28 flex flex-col justify-around items-start h-[100%]">
            <h1 className="text-[50px] font-bold font-[roboto]">
              Front-End Developer
            </h1>
            <h3 className="text-[30px] font-semibold">Christian Peña Yañez</h3>
            <p>
              Programador en busca de una oportunidad de trabajo que me permita
              crecer como programador{" "}
            </p>
            <button className="bg-blue-400 py-2 rounded-md px-2">
              Descargar curriculum
            </button>
          </div>
        </div>

        <div className="w-[50%] h-[100%] flex justify-center items-center">
          <h2 className="bg-red-300 w-[80%] h-[80%]">Foto</h2>
        </div>
      </div>
    </main>
  );
};

export default Inicio;
