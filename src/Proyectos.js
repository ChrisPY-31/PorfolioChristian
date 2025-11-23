import tvMovies from "./Images/TvMovies2.png";
import granoDeOro from "./Images/Oro.jpeg";
import UniConnect from "./Images/fotoUniConnect.jpeg";
export const proyectos = [
  {
    title: "UniConnect",
    subtitle: [" Front-End ", " Back-End "],
    description:
      "UniConnect es una plataforma de red social para estudiantes universitarios. Permite a los usuarios crear perfiles, publicar contenido, interactuar con otros estudiantes y unirse a grupos relacionados con sus intereses académicos.",
    technologies: [
      "JavaScript ",
      "React ",
      "Redux ",
      "Java ",
      "Spring boot ",
      "Spring Security ",
      "JWT ",
      "PostgreSql",
    ],
    image: `${UniConnect}`,
    deploid: {
      gitHud: "https://github.com/ChrisPY-31/UniConnect",
      deploy: "https://porfiles-students-front-end.vercel.app/",
    },
  },
  {
    title: "Grano de Oro",
    subtitle: [" Front-End ", " Back-End "],
    description:
      "E-commerce para la venta de cafe. Es una aplicacino que nos permite visualizar los productos que se venden en la tienda, asi mismo poder comprarlos y ver el detalle de cada uno de ellos",
    image: `${granoDeOro}`,
    technologies: [
      "JavaScript ",
      "React ",
      "Redux ",
      "Express ",
      "Sequelize ",
      "Node",
    ],
    deploid: {
      gitHud: "https://github.com/ProyectoFinalHenry/Frontend",
      deploy: "https://granodeoro.vercel.app/",
    },
  },
  {
    title: "Gestion de Productos",
    subtitle: [" Front-End ", " Back-End "],
    description:
      "Aplicacion para la venta de productos de supermercado. Es una aplicacino que nos permite visualizar los productos que se venden en la tienda, asi mismo poder comprarlos y ver el detalle de cada uno de ellos",
    image: `${tvMovies}`,
    technologies: [
      "JavaScript",
      " Tailwind",
      " React",
      " Redux",
      " Java",
      " Spring-Boot ",
      "PostgreSql",
    ],
    deploid: {
      gitHud: "https://github.com/ChrisPY-31/Backend",
      deploy: "",
    },
  },
];
