import React from "react";

const Proyectos = () => {
  return (
    <section className="min-h-screen">
      <div className="py-4 w-[80%] mx-auto">
        <h2 className=" text-5xl font-bold py-6 text-white">Proyectos</h2>
        <div className="flex h-[300px] mx-auto w-[80%] gap-5 justify-center items-center py-5">
          <img
            className="rounded-md w-[50%] h-56 object-cover"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <div className="flex flex-col justify-around h-full py-4 text-white">
            <h3 className="text-xl">E-commerce</h3>
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
              <button className="bg-green-400 w-full rounded-md">GitHub</button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 w-[80%] mx-auto">
        <div className="flex h-[300px] mx-auto w-[80%] gap-5 justify-center items-center py-5">
          <div className="flex flex-col justify-around h-full py-4 text-white">
            <h3 className="text-xl">E-commerce</h3>
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
              <button className="bg-green-400 w-full rounded-md">GitHub</button>
            </div>
          </div>
          <img
            className="rounded-md w-[50%] h-56 object-cover"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
      </div>

      <div className="py-4 w-[80%] mx-auto">
        <div className="flex h-[300px] mx-auto w-[80%] gap-5 justify-center items-center py-5">
          <div className="flex flex-col justify-around h-full py-4 text-white">
            <h3 className="text-xl">E-commerce</h3>
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
              <button className="bg-green-400 w-full rounded-md">GitHub</button>
            </div>
          </div>
          <img
            className="rounded-md w-[50%] h-56 object-cover"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
