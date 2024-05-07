import React from "react";
import '../App.css'
import { CiLight , CiLinkedin} from "react-icons/ci";
import { MdOutlineDarkMode } from "react-icons/md";
import { useState } from "react";

const Navegation = () => {

  const [day, setDay] = useState(false)
  const handleClick = (index) =>{
    if (index === 0){
      window.scroll({
        top:0,
        behavior:"smooth",
      })
    }
    if (index === 1){
      window.scroll({
        top:735,
        behavior:"smooth",
      })
    }
    if (index === 2){
      window.scroll({
        top:1469,
        behavior:"smooth",
      })
    }
    if (index === 3){
      window.scroll({
        top:2519,
        behavior:"smooth",
      })
    }
    if (index === 4){
      window.scroll({
        top:3000,
        behavior:"smooth",
      })
    }
  }
  return (
    <nav className=" fixed w-full  z-50">
      <div className="w-[80%] mx-auto py-5 flex justify-between text-white">
        <h3>Christian Logo</h3>
        <div >
          <ul className="flex gap-4 cursor-pointer">
            <li  onClick={ ()=>handleClick(0)}>Inicio</li>
            <li onClick={ ()=>handleClick(1)}>Sobre mi</li>
            <li onClick={ ()=>handleClick(2)}>Proyectos</li>
            <li onClick={ ()=>handleClick(3)}>Tecnologias</li>
            <li onClick={ ()=>handleClick(4)}>Contacto</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <CiLinkedin className="h-full text-3xl cursor-pointer"/>
          {day?<MdOutlineDarkMode/>: <CiLight className="text-3xl border-2 border-gray-400 rounded-full p-1 cursor-pointer"/>  }
        </div>
      </div>
    </nav>
  );
};

export default Navegation;
