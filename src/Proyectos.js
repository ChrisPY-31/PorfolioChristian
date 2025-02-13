import tvMovies from "./Images/TvMovies2.png";
import granoDeOro from "./Images/Oro.jpeg";
export const proyectos = [
  {
    title: "Grano de Oro",
    subtitle: [" Front-End " , " Back-End "],
    description:
      "E-commerce para la venta de cafe. este proyecto tuvo la finalidad de poner en practica todos nuestro conocimientos para enfrentar los desafios que podemos entrentar a futuro en una empresa simulando un ambiente laboral y colaboracion con un equipo de trabajo",
    image: `${granoDeOro}`,
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "Sequelize",
      "Node",
    ],
    deploid: {
      gitHud: "https://github.com/ProyectoFinalHenry/Frontend",
      deploy: "https://granodeoro.vercel.app/",
    },
  },
  {
    title: "Gestion de Productos",
    subtitle: [" Front-End " , " Back-End "],
    description:
      "E-commerce para la venta de cafe. este proyecto tuvo la finalidad de poner en practica todos nuestro conocimientos para enfrentar los desafios que podemos entrentar a ",
    image: `${tvMovies}`,
    technologies: ["JavaScript", "Tailwind", "React", "Redux", "Java" , "Spring-Boot"],
    deploid: {
      gitHud: "https://github.com/ChrisPY-31/TvMovies",
      deploy: "",
    },
  },
  {
    title: "Video Games",
    subtitle: [" Front-End " , " Back-End "],
    description:
      "Video Games es una aplicacion en el cual nos permite visualizar peliculas asi mismo crear una pelicula a su gusto ",
    technologies: [
      "JavaScript",
      "React",
      "Redux",
      "Express",
      "Sequelize",
      "Node",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsuYDxvoDKhmnpc8EbIt1TybbDKvmVRtUr61EQi_CNA&s",
    deploid: {
      gitHud:
        "https://github.com/ChrisPY-31/Aplicacion_Videogames/tree/master/PI-Videogames-main",
      deploy: "",
    },
  },
];
