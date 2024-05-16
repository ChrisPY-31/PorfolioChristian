import React from "react";
import ImagenLogo from "../Images/TvMovies2.png";
import Mode from "./Mode";

const Inicio = ({ theme, handleChangeTheme }) => {
  return (
    <main
      className="h-[95vh] flex justify-center items-center max-sm:items-start max-sm:h-[60vh]
    max-sm:block
    "
    >
      <h2 className="dark:text-white text-5xl font-[Lato] font-[900] max-sm:text-2xl max-sm:text-center hidden max-sm:block pt-2">
        Christian Peña Yañez
      </h2>
      <div className="md:hidden absolute right-2 top-2.5">
        <Mode theme={theme} handleChangeTheme={handleChangeTheme} />
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-2 gap-10 mt-20 max-sm:grid-cols-1 max-sm:justify-items-center max-sm:mt-5 max-sm:w-[90%] max-sm:gap-1">
        <img
          src={`${ImagenLogo}`}
          className="w-[750px] h-[350px] rounded-2xl max-sm:rounded-full max-sm:w-[150px] max-sm:h-[150px]"
          alt=""
        />
        <div className="dark:text-white flex flex-col justify-around py-3 ">
          <h1
            className="text-5xl font-[Lato] font-[700] w-[60%] leading-[1.2] max-sm:hidden
        "
          >
            Hey there! I'm Christian Peña Yañez
          </h1>
          <h1 className="text-center md:hidden font-[Roboto] font-[700] text-xl ">
            Christian Peña Yañez
          </h1>
          <p className="font-[Roboto] font-[300] max-sm:my-2">
            I´m programador Front end in Globant with a passion for creating
            thoughtful, intuitive experiences{" "}
          </p>
          <div className="flex gap-4 text-white max-sm:justify-center">
            <a
              className="py-2 px-9 rounded-md border-[#333c43] border-2 font-[Roboto] font-[400] hover:bg-[#1a2123]
            "
            >
              Linkedin
            </a>
            <a
              className="py-2 px-9 rounded-md bg-[#1a2123] border-[#333c43]  
                    border-2 dark:hover:bg-transparent font-[Roboto] font-[400]"
            >
              Descargar Cv
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inicio;
