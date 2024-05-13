import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineSmartphone } from "react-icons/md";

const Contacto = () => {
  return (
    <div className="h-[50vh]">
      <div className="w-[80%] mx-auto h-full">
        <h2 className="text-white text-5xl font-[Lato] font-[900] ">
          Contacto
        </h2>
        <div className="flex flex-col justify-evenly h-full text-white w-[90%] mx-auto">
          <div className="flex gap-8 ">
            <div className="bg-[#334D66] h-12 w-12 rounded-lg flex justify-center items-center">
              <IoLocationOutline className="text-2xl" />
            </div>
            <div >
              <p>Location</p>
              <p className="text-[#a7a8a9]">Santiago Tianguistenco</p>
            </div>
          </div >
          <div className="flex gap-8 ">
            <div className="bg-[#334D66] h-12 w-12 rounded-lg flex justify-center items-center">
              <MdOutlineMarkEmailRead />
            </div>
            <div>
              <p>Email</p>
              <p className="text-[#a7a8a9]">Christianpeya@hotmail.com</p>
            </div>
          </div>
          <div className="flex gap-8 ">
            <div className="bg-[#334D66] h-12 w-12 rounded-lg flex justify-center items-center">
              <CiLinkedin />
            </div>
            <div>
              <p>Linkedin</p>
              <p className="text-[#a7a8a9]">Linkedin.com/Christianpeña</p>
            </div>
          </div>
          <div className="flex gap-8 ">
            <div className="bg-[#334D66] h-12 w-12 rounded-lg flex justify-center items-center">
              <MdOutlineSmartphone />
            </div>
            <div >
              <p>Phone</p>
              <p className="text-[#a7a8a9]">713-120-4197</p>
            </div>
          </div>
          <a className="bg-[#334D66] py-2 w-[40%] rounded-lg text-center ">Descargar curriculum</a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
