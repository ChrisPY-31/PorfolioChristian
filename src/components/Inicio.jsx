import React from "react";
import Mode from "./Mode";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import cvChristianActualizado from "../assets/CvChristianPY.pdf";
import imagenChristian from "../Images/ChristianImagenPrincipal.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
const Inicio = ({ theme, handleChangeTheme }) => {
  return (
    <main
      className="h-[95vh] flex justify-center items-center max-sm:items-start max-sm:h-[50vh]
    max-sm:block max-lg:h-[55vh]  
    "
    >
      <h2 className="text-5xl font-[Lato] font-[900] max-sm:text-2xl max-sm:text-center hidden max-sm:block pt-2">
        Christian Peña Yañez
      </h2>
      <div className="md:hidden absolute right-2 top-2.5">
        <Mode theme={theme} handleChangeTheme={handleChangeTheme} />
      </div>
      <div className="w-[70%] mx-auto grid grid-cols-2 gap-10 mt-20 max-sm:grid-cols-1 max-sm:justify-items-center max-sm:mt-5 max-lg:w-[90%] max-sm:gap-1 max-md:mt-0 max-lg:grid-cols-[300px,1fr] max-md:grid-cols-[200px,1fr]">
        <motion.img
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          src={`${imagenChristian}`}
          className="w-[750px] h-[350px] rounded-2xl max-sm:rounded-full max-sm:w-[150px] max-sm:h-[150px] max-md:w-[220px] max-md:h-[220px] max-lg:h-[250px] object-fill"
          alt=""
        />
        <motion.div
          className="flex flex-col justify-around py-3 max-md:py-0"
          variants={fadeIn("left", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h1
            className="text-5xl font-[Lato] font-[700] w-[60%] leading-[1.2] max-sm:hidden
            max-lg:text-3xl max-md:w-full
            "
          >
            ¡Hola! Soy Christian Peña Yañez.
          </h1>
          <h1 className="max-sm:text-center md:hidden font-[Roboto] font-[700] text-xl max-md:text-start">
            Christian Peña Yañez
          </h1>
          <p className="font-[Roboto] font-[300] max-sm:my-2">
            Programador full stack trabajando con tecnologías como JavaScript, React y Spring Boot
          </p>
          <div className="flex gap-4 max-sm:justify-center flex-wrap">
            <a
              className="py-2 px-6 rounded-md dark:border-[#333c43] dark:border-2 font-[Roboto] font-[400] dark:hover:bg-[#1a2123] shadow-md cursor-pointer flex items-center gap-2"
              href="https://www.linkedin.com/in/christianpeya01/"
              target="_blank"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
            <a
              className="py-2 px-6 rounded-md dark:border-[#333c43] dark:border-2 font-[Roboto] font-[400] dark:hover:bg-[#1a2123] shadow-md cursor-pointer flex items-center gap-2"
              href="https://github.com/ChrisPY-31"
              target="_blank"
            >
              <FaGithub className="text-xl" />
              GitHub
            </a>
            <a
              href={cvChristianActualizado}
              download
              className="py-2 px-6 rounded-md bg-[#1a2123] border-[#333c43]
                    border-2 dark:hover:bg-transparent font-[Roboto] font-[400]
                    cursor-pointer flex items-center gap-2 text-white"
            >
              <MdDownload className="text-xl" />
              Descargar CV
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default Inicio;
