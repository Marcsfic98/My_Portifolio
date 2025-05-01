
import "./App.css"
import "../src/pages/Home/Menu.css"
import Hero from "./pages/Home/sections/Hero";
import Tec from "./pages/Home/sections/Tecnologia";
import Project from "./pages/Home/sections/Project";
import Educacao from "./pages/Home/sections/Educacao"
import { useState } from "react";



const App = ()=> {
  
 
  const [nomeComponente, setNomeComponente] = useState("Hero") ;

  const mostraComponente = (nomeComponenteSelecionado:string, idDoLink)=>{

    setNomeComponente(nomeComponenteSelecionado);
    setActiveLink(idDoLink);
  }

  const [activeLink, setActiveLink] = useState(null); // Novo estado para rastrear o link ativo


  return (
    <>
       <div className="home">

        
<div className="img"></div>
  <br/>
  <a id="Hero" href="#"className={activeLink === "Hero" ? 'active' : ''} onClick={(e)=>{
    e.defaultPrevented;
    mostraComponente("Hero","Hero")
  }}>SOBRE</a>
  <a id="Tec" href="#"className={activeLink === "Tec" ? 'active' : ''} onClick={(e)=>{
    e.defaultPrevented;
    mostraComponente("Tec","Tec")
  }}>TECNOLOGIAS</a>
  <a id="Project" href="#"className={activeLink === "Project" ? 'active' : ''}  onClick={(e)=>{
    e.defaultPrevented;
    mostraComponente("Project","Project")
  }}>PROJETOS</a>
  <a id="Educacao" href="#"className={activeLink === "Educacao" ? 'active' : ''}  onClick={(e)=>{
    e.defaultPrevented;
    mostraComponente("Educacao","Educacao")
  }}>EDUCAÇÃO</a>
</div>


      {
        nomeComponente === "Hero" && (
            <Hero/>
        )
      }

      {
          nomeComponente === "Tec" && (
            <Tec/>
          )
        }

  {
        nomeComponente === "Project" && (
          <Project/>
        )
      }

{
        nomeComponente === "Educacao" && (
          <Educacao/>
        )
      }

      
      
    
      
   
    </>
  )
}

export default App
