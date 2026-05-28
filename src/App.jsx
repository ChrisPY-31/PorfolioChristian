import "./App.css";
import AboutMe from "./components/AboutMe";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import Navegation from "./components/Navegation";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";
import { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <Navegation theme={theme} handleChangeTheme={handleChangeTheme} />
      <div id="inicio"><Inicio theme={theme} handleChangeTheme={handleChangeTheme} /></div>
      <div id="sobre-mi"><AboutMe /></div>
      <div id="proyectos"><Proyectos /></div>
      <div id="tecnologias"><Tecnologias /></div>
      <div id="contacto"><Contacto /></div>
      <Footer />
    </>
  );
}

export default App;
