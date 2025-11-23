import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt, FaReact,FaJava} from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiSpringboot
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";


const Tecnologias = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center py-4">
      <div className="w-[80%] mx-auto h-full   max-sm:w-[90%] ">
        <motion.h2
        variants={fadeIn("right", 0.2)}
        initial={{ opacity: 0 }}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }} 
        className="dark:text-white font-[Lato] font-[900] text-5xl max-sm:text-2xl max-sm:text-center max-lg:text-3xl">
          Tecnologias
        </motion.h2>
        <div 
        
        className="tecnologias  justify-normal gap-5 mt-8 w-[90%] mx-auto ">
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <FaHtml5 className="text-3xl"></FaHtml5>
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">HTML</h4>
              <span className="text-[#9f9fa8]">Lenguajes de marcas hipertexto</span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <FaCss3Alt className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">CSS</h4>
              <span className="text-[#9f9fa8]">Lenguaje de diseño gráfico </span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <SiTailwindcss className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">TAILWIND CSS</h4>
              <span className="text-[#9f9fa8]">Framework de CSS</span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <IoLogoJavascript className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">JAVACRIPT</h4>
              <span className="text-[#9f9fa8]">Lenguaje javaScript</span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <FaReact className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">REACT</h4>
              <span className="text-[#9f9fa8]">Bibloteca de javaScript</span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <SiRedux className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">REDUX</h4>
              <span className="text-[#9f9fa8]">Manejo de estado </span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <FaJava className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">JAVA</h4>
              <span className="text-[#9f9fa8]">Lenguaje de programación</span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <SiSpringboot className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">SPRING BOOT</h4>
              <span className="text-[#9f9fa8]">Framework de java </span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <BiLogoSpringBoot className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">SPRING SECURITY</h4>
              <span className="text-[#9f9fa8]">Framework de java</span>
            </div>
          </motion.div>
          <motion.div 
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" h-[150px] p-3  dark:bg-[#1a2123] dark:border-[#333c43] dark:border-2 shadow-lg rounded-lg text-black dark:text-white">
            <SiPostgresql className="text-3xl" />
            <div className="mt-2">
              <h4 className="font-[Roboto] font-[400]">POSTGRESQl</h4>
              <span className="text-[#9f9fa8]">Bases de datos relacional</span>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
