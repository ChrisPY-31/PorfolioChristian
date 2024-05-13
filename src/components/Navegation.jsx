import React from "react";
import "../App.css";
import { CiLight, CiLinkedin } from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

const Navegation = () => {
  const [day, setDay] = useState(false);
  const handleClick = (index) => {
    if (index === 0) {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
    if (index === 1) {
      window.scroll({
        top: 735,
        behavior: "smooth",
      });
    }
    if (index === 2) {
      window.scroll({
        top: 1469,
        behavior: "smooth",
      });
    }
    if (index === 3) {
      window.scroll({
        top: 2519,
        behavior: "smooth",
      });
    }
    if (index === 4) {
      window.scroll({
        top: 3000,
        behavior: "smooth",
      });
    }
  };
  return (
    <nav className=" fixed w-full contenedor z-50 ">
      <div className="w-[80%] mx-auto py-5 flex justify-between text-white border-b-2 px-5">
        <h2>Christian Peña Yañez</h2>
        <div className="flex gap-8">
          <ul className="flex gap-8 cursor-pointer">
            <li onClick={() => handleClick(0)}>Home</li>
            <li onClick={() => handleClick(1)}>Proyectos</li>
            <li onClick={() => handleClick(2)}>Sobre mi </li>
            <li onClick={() => handleClick(3)}>Tecnologias</li>
            <li onClick={() => handleClick(4)}>Contacto</li>
          </ul>
          <div className="flex gap-8">
            {day ? (
              <MdOutlineDarkMode className=" w-[30px] h-[30px] p-1 rounded-lg text-white"/>
            ) : (
              <CiLight className=" w-[30px] h-[30px] p-1 rounded-lg text-white" />
            )}

            <img src="https://pbs.twimg.com/profile_images/1496885672627556362/jkvPwUuT_400x400.jpg" alt="" 
            className="rounded-full w-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navegation;
