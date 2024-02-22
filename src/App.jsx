import "./App.css";
import AboutMe from "./components/AboutMe";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Navegation from "./components/Navegation";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";
function App() {
  return (
    <>
      <Navegation />
      <Inicio />
      <AboutMe />
      <Proyectos />
      <Tecnologias />
      <Contacto></Contacto>
    </>
  );
}

export default App;
