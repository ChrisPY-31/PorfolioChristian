import React from "react";

const Tecnologias = () => {
  return (
    <section className="h-[90vh] ">
      <div className="w-[80%] mx-auto h-full text-white">
        <h2 className=" text-white 3xl z-10 left-[150px] top-[100px] font-semibold text-4xl">Tecnologias</h2> 
        <div className="grid grid-cols-2 justify-items-center h-full gap-10 items-center w-[80%] mx-auto ">
          <div className="border-2 border-red-400 w-full h-[65%] py-3">
            <p className="text-center text-4xl font-medium">Front end</p>
            <div>

            </div>
          </div>
          <div className="border-2 border-blue-400 w-full h-[65%] py-3">
            <p className="text-center text-4xl font-medium">Back end</p>
            <div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
