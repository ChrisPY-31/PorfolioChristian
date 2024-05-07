import React from "react";
import imageMovie from '../Images/TvMovies2.png'

const Proyectos = () => {
  return (
    <section className="min-h-screen">
      <div className="w-[80%] mx-auto">
        <div className="py-4 ">
          <h2 className=" text-5xl font-bold mb-6 text-white">Proyectos</h2>
          <div className="flex h-[300px] mx-auto w-[80%] gap-5 justify-center items-center py-5">
            <img
              className="rounded-md w-[50%] h-56 object-cover"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
            <div className="flex flex-col justify-around h-full py-4 text-white">
              <h3 className="text-xl">Grano de Oro</h3>
              <p>
                crud en el cual los permite visualizar el contenido del producto
                comprar entre muchas otras funcionalidades
              </p>
              <div>
                <h3>Tecnologias</h3>
                <div className="flex gap-4">
                  <p>tailwind</p>
                  <p>React</p>
                  <p>TypeScript</p>
                </div>
              </div>
              <div className="flex justify-between gap-5 w-1/2">
                <button className=" bg-red-400 w-full py-1.5 rounded-md">
                  <a href="https://granodeoro.vercel.app/" target="_blank">Deployd</a>
                </button>
                <button className="bg-green-400 w-full rounded-md">
                  <a href="https://github.com/ProyectoFinalHenry/Frontend">GitHub</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 ">
          <div className="flex h-[300px] mx-auto w-[80%] gap-5 justify-center items-center py-5">
            <div className="flex flex-col justify-around h-full py-4 text-white">
              <h3 className="text-xl">VideoGames</h3>
              <p>
                crud en el cual los permite visualizar el contenido del producto
                comprar entre muchas otras funcionalidades
              </p>
              <div>
                <h3>Tecnologias</h3>
                <div className="flex gap-4">
                  <p>tailwind</p>
                  <p>React</p>
                  <p>TypeScript</p>
                </div>
              </div>
              <div className="flex justify-between gap-5 w-1/2">
                <button className=" bg-red-400 w-full py-1.5 rounded-md">
                  Deploy
                </button>
                <a href="https://github.com/ChrisPY-31/Aplicacion_Videogames/tree/master/PI-Videogames-main">Git Hud</a>

              </div>
            </div>
            <img
              className="rounded-md w-[50%] h-56 object-cover"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
        </div>

        <div className="flex h-[300px] mx-auto w-[80%] gap-5 justify-center items-center py-5">
          <img
            className="rounded-md w-[40%] h-56 object-cover cursor-pointer"
            src={`${imageMovie}`}
            alt=""
          />
          <div className="flex flex-col justify-around h-full py-4 text-white">
            <h3 className="text-xl">Tv-Movies</h3>
            <p>
              crud en el cual los permite visualizar el contenido del producto
              comprar entre muchas otras funcionalidades
            </p>
            <div>
              <h3>Tecnologias</h3>
              <div className="flex gap-4">
                <p>tailwind</p>
                <p>React</p>
                <p>TypeScript</p>
              </div>
            </div>
            <div className="flex justify-between gap-5 w-1/2">
              <button className=" bg-red-400 w-full py-1.5 rounded-md">
                Deploy
              </button>
              <button className="bg-green-400 w-full rounded-md">
                <a href="https://github.com/ChrisPY-31/TvMovies" target="_blank">Git Hud</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
