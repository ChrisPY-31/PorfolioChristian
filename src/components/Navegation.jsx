import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import Mode from "./Mode";
import logoChristian from "../Images/LogoChristian.png";

const NAV_ITEMS = [
  { label: "Inicio", id: "inicio" },
  { label: "Sobre mi", id: "sobre-mi" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Tecnologías", id: "tecnologias" },
  { label: "Contacto", id: "contacto" },
];

const Navegation = ({ theme, handleChangeTheme }) => {
  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="fixed w-full contenedor z-50 max-sm:bottom-0"
    >
      <div
        className="w-[80%] mx-auto py-5 flex justify-between border-b-2 px-5
      max-sm:w-full max-sm:justify-center sm:w-[95%] lg:w-[80%] max-md:px-0"
      >
        <h2 className="font-[Roboto] font-[700] text-xl max-sm:hidden max-lg:text-[16px]">
          Christian Peña Yañez
        </h2>
        <div className="flex gap-8 justify-center items-center">
          <ul className="flex gap-8 cursor-pointer font-[Roboto] font-[400] max-sm:text-[12px] max-sm:gap-4 max-md:text-[12px] items-center max-lg:gap-4">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id} onClick={() => handleClick(id)}>{label}</li>
            ))}
          </ul>
          <div className="flex gap-8 max-sm:hidden">
            <Mode theme={theme} handleChangeTheme={handleChangeTheme} />
          </div>
          <img
            src={logoChristian}
            alt="Logo Christian"
            className="rounded-full w-8 cursor-pointer max-sm:hidden"
          />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navegation;
