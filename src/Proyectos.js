import tvMovies from './Images/TvMovies2.png'
import granoDeOro from './Images/Grano-De-Oro'
const proyectos = [
    {
        title:'Grano de Oro',
        subtitle:['Back-End', 'Front-End'],
        description:'E-commerce para la venta de cafe. este proyecto tuvo la finalidad de poner en practica todos nuestro conocimientos para enfrentar los desafios que podemos entrentar a futuro en una empresa simulando un ambiente laboral y colaboracion con un equipo de trabajo',
        image:`${granoDeOro}`,
        technologies:['JavaScript' , 'React' , 'Redux','Express','Sequelize','Node'],
        deploid:{
            gitHud:'https://github.com/ProyectoFinalHenry/Frontend',
            deploy:'https://granodeoro.vercel.app/',
        }
    },
    {
        title:'TvPeliculas',
        subtitle:['Front-End'],
        description:'',
        image:`${tvMovies}`,
        technologies:['JavaScript', 'Tailwind' , 'React' , 'Redux', 'TypeScript'],
        deploid:{
            gitHud:'https://github.com/ChrisPY-31/TvMovies',
            deploy:'',
        }
    },
    {
        title:'Video Games',
        subtitle:['Back-End','Front-End'],
        description:'',
        technologies:['JavaScript' , 'React' , 'Redux','Express','Sequelize','Node'],
        image:'',
        deploid:{
            gitHud:'https://github.com/ChrisPY-31/Aplicacion_Videogames/tree/master/PI-Videogames-main',
            deploy:'',
        }
    },
    
]