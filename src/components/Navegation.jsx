import React from "react";
import "../App.css";
import { motion } from "framer-motion";


import Mode from "./Mode";

const Navegation = ({ theme, handleChangeTheme }) => {
  const handleClick = (index) => {
    if (index === 0) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    if (index === 1) {
      window.scroll({
        top: 600,
        behavior: "smooth",
      });
    }
    if (index === 2) {
      window.scroll({
        top: 1125,
        behavior: "smooth",
      });
    }
    if (index === 3) {
      window.scroll({
        top: 1925,
        behavior: "smooth",
      });
    }
    if (index === 4) {
      window.scroll({
        top: 2500,
        behavior: "smooth",
      });
    }
  };
  return (
    <motion.nav
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 2 }}
      
      className="fixed w-full contenedor z-50 max-sm:bottom-0  "
    >
      <div
        className="w-[80%] mx-auto py-5 flex justify-between dark:text-white border-b-2 px-5
      max-sm:w-full max-sm:justify-center sm:w-[95%] lg:w-[80%] max-md:px-0
      "
      >
        <h2 className="font-[Roboto] font-[700] text-xl max-sm:hidden max-lg:text-[16px]">
          Christian Peña Yañez
        </h2>
        <div className="flex gap-8 justify-center items-center">
          <ul className="flex gap-8 cursor-pointer font-[Roboto] font-[400] max-sm:text-[12px] max-sm:gap-4 max-md:text-[12px] items-center max-lg:gap-4">
            <li onClick={() => handleClick(0)}>Home</li>
            <li onClick={() => handleClick(1)}>Sobre mi </li>
            <li onClick={() => handleClick(2)}>Proyectos</li>
            <li onClick={() => handleClick(3)}>Tecnologias</li>
            <li onClick={() => handleClick(4)}>Contacto</li>
          </ul>
          <div className="flex gap-8 max-sm:hidden">
            <Mode theme={theme} handleChangeTheme={handleChangeTheme} />
          </div>
          <img
            src="https://pbs.twimg.com/profile_images/1496885672627556362/jkvPwUuT_400x400.jpg"
            alt=""
            className="rounded-full w-8 cursor-pointer max-sm:hidden"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navegation;
