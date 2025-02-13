import React from "react";
import imageMovie from "../Images/TvMovies2.png";
import { proyectos } from "../Proyectos";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Proyectos = () => {
  return (
    <section className="min-h-[90vh]">
      <div className="w-[80%] mx-auto h-full max-sm:w-[90%] max-lg:w-[90%]">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial={{ opacity: 0 }}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }} 
          className="text-5xl dark:text-white font-[Lato] font-[900] max-sm:text-2xl max-lg:text-center max-lg:text-3xl "
        >
          Proyectos
        </motion.h2>
        <div className="flex flex-col gap-10 h-full mt-10 w-[90%] mx-auto">
          {proyectos.map((proyecto) => (
            <motion.div
              className="proyectos gap-5 "
              variants={fadeIn("right", 0.2)}
              initial={{ opacity: 0 }}
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <div className="dark:text-white flex flex-col justify-center gap-2">
                <h3 className="font-[Lato] font-[700] text-xl">
                  {proyecto.title}
                </h3>
                <div>
                  {proyecto.subtitle.map((tecnologia) => (
                    <span className="text-[#a7a8a9] font-[Roboto] font-[300]  ">
                      {tecnologia}
                    </span>
                  ))}
                </div>
                <p className="font-[Roboto] font-[300] ">
                  {proyecto.description}
                </p>
                <div className="flex gap-5 text-white max-sm:justify-center">
                  <a
                    className="py-2 px-9 rounded-md border-[#333c43] shadow-lg dark:text-white font-[Roboto] font-[400] dark:hover:bg-[#1a2123] max-md:px-5 dark:border-2 text-black"
                    target="_blank"
                    href={proyecto.deploid.gitHud}
                  >
                    Git Hub
                  </a>
                  <a
                    className="py-2 px-9 rounded-md bg-[#1a2123] border-[#333c43]  
                    border-2 dark:hover:bg-transparent font-[Roboto] font-[400] max-md:px-5"
                    target="_blank"
                    href={proyecto.deploid.deploy}
                  >
                    Deploy
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center max-sm:order-first">
                <img
                  src={proyecto.image}
                  alt=""
                  className="h-[200px] w-full rounded-xl "
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
