import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineSmartphone } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contacto = () => {
  return (
    <div className="h-[50vh]">
      <div className="w-[80%] mx-auto h-full max-sm:w-[90%]">
        <motion.h2 
        variants={fadeIn("right", 0.2)}
        initial={{ opacity: 0 }}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
        className="dark:text-white text-5xl font-[Lato] font-[900] max-sm:text-2xl max-sm:text-center">
          Contacto
        </motion.h2>
        <motion.div 
        variants={fadeIn("right", 0.2)}
        initial={{ opacity: 0 }}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
        className="flex flex-col justify-evenly h-full dark:text-white w-[90%] mx-auto">
          <div className="flex gap-8 ">
            <div className="dark:bg-[rgb(26,33,35)] dark:border-[#333c43] dark:border-2  h-12 w-12 rounded-lg flex justify-center items-center shadow-md ">
              <IoLocationOutline className="text-2xl" />
            </div>
            <div>
              <p className="font-[Roboto] font-[700]">Ubicación</p>
              <p className="text-[#a7a8a9]">Toluca de Lerdo</p>
            </div>
          </div>
          <div className="flex gap-8 ">
            <div className="dark:bg-[rgb(26,33,35)] dark:border-[#333c43] dark:border-2  h-12 w-12 rounded-lg flex justify-center items-center shadow-md ">
              <MdOutlineMarkEmailRead className="text-2xl" />
            </div>
            <div>
              <p className="font-[Roboto] font-[700]">Correo</p>
              <p className="text-[#a7a8a9]">Christianpeya@hotmail.com</p>
            </div>
          </div>
          <div className="flex gap-8 ">
            <div className="dark:bg-[rgb(26,33,35)] dark:border-[#333c43] dark:border-2  h-12 w-12 rounded-lg flex justify-center items-center shadow-md cursor-pointer">
              <a href="https://www.linkedin.com/in/christianpeya01">
              <CiLinkedin className="text-2xl " />
              </a>
            </div>
            <div>
              <p className="font-[Roboto] font-[700]">Linkedin</p>
              <a className="text-[#a7a8a9]" href="https://www.linkedin.com/in/christianpeya01/"
              target="_blank"
              >Linkedin.com/in/christianpeya01/</a>
            </div>
          </div>
          <div className="flex gap-8 ">
            <div className="dark:bg-[rgb(26,33,35)] dark:border-[#333c43] dark:border-2  h-12 w-12 rounded-lg flex justify-center items-center shadow-md ">
              <MdOutlineSmartphone className="text-2xl" />
            </div>
            <div>
              <p className="font-[Roboto] font-[700]">Telefono</p>
              <p className="text-[#a7a8a9]">720-560-1502</p>
            </div>
          </div>
          <a className="dark:bg-[#1a2123] border-[#333c43] dark:border-2 py-2 w-[40%] rounded-lg text-center cursor-pointer dark:hover:bg-[#151a1b] max-sm:w-[80%] max-sm:mx-auto  shadow-lg  dark:text-white text-black font-[Roboto] font-[400]"
          >
            Descargar curriculum
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacto;
