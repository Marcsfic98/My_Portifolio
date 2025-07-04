import  { useState, useEffect} from 'react';

import "./App.css";
import "../Menu/Menu.css";
import Hero from "../Sobre/Hero";
import Tec from "../Tecnologias/Tecnologia";
import Project from "../Project/Project";
import Educacao from "../Educacao/Educacao";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


const App = ()=> {

  
  const [menuOpen, setMenuOpen] = useState(false); 
  const [nomeComponente, setNomeComponente] = useState("Hero") ;
  const [modo, setModo] = useState<'sol' | 'lua'>('sol');
  const [lenguage, setLenguage] = useState <"br"| "eua">("br")


  useEffect(() => {
    if(nomeComponente === 'Project'){
      const element = document.querySelector('.project');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    }else if(nomeComponente === 'Tec'){
      const element = document.querySelector('.tecnologias');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }else if(nomeComponente === 'Educacao'){
      const element = document.querySelector('.educacao');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }else if(nomeComponente === 'Hero'){
      const element = document.querySelector('.sobre');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [nomeComponente]);

  

   
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

   
   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 768);
     };
 
     window.addEventListener('resize', handleResize);
 
     
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);



  const modoSol = () =>{
    setModo('lua');
  }
  const modoLua = () =>{
    setModo('sol');
  }
  
  const mostraComponente = (nomeComponenteSelecionado:string, idDoLink:string)=>{

    setNomeComponente(nomeComponenteSelecionado);
    setActiveLink(idDoLink);
  }

  const [activeLink, setActiveLink] = useState('Hero'); 




  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (nome:string, id:string) => {
    mostraComponente(nome, id);
    setMenuOpen(false);
  };



  return (
    <>
      <i className="menu_mobile" onClick={toggleMenu}>
        <FontAwesomeIcon className="icon" icon={faBars} />
      </i>
      <div className={` home pages ${modo === 'sol'? 'b' : "w"} ${menuOpen ? 'show' : ''}`}>
        
        <div className="img"></div>
        <br />
            <a id="Hero" href="#" className={activeLink === "Hero" ? 'active' : ''} onClick={(e) => {
              e.preventDefault();
              mostraComponente("Hero", "Hero")
              handleLinkClick("Hero", "Hero")
            }}>{lenguage === "br"? "SOBRE" : "ABOUT"}</a>


            <a id="Tec" href="#" className={activeLink === "Tec" ? 'active' : ''} onClick={(e) => {
              e.preventDefault();
              mostraComponente("Tec", "Tec")
              handleLinkClick("Tec", "Tec")
            }}>{lenguage === "br"? "TECNOLOGIAS" : "TECHNOLOGIES"}</a>


            <a id="Project" href="#" className={activeLink === "Project" ? 'active' : ''} onClick={(e) => {
              e.preventDefault();
              mostraComponente("Project", "Project")
              handleLinkClick("Project", "Project")
            }}>{lenguage === "br"? "PROJETOS" : "PROJECTS"}</a>


            <a id="Educacao" href="#" className={activeLink === "Educacao" ? 'active' : ''} onClick={(e) => {
              e.preventDefault();
              mostraComponente("Educacao", "Educacao")
              handleLinkClick("Educacao", "Educacao")
            }}>{lenguage === "br"? "EDUCAÇÃO" : "EDUCATION"}</a>

         {
            modo === 'sol' &&(
            <a onClick={modoSol}><FontAwesomeIcon  className="icon2 sol" icon={faSun} /></a>
            )
         }

          {
            modo ==='lua' &&(
              <a onClick={modoLua}><FontAwesomeIcon className="icon2 lua" icon={faMoon} /></a>
            )
          }

          <div className="lenguage-container" >
            <button onClick={()=>setLenguage("br")} className="lenguage br"></button>
            <button onClick={()=>setLenguage("eua")} className="lenguage usa"></button>
          </div>
      </div>


      {isMobile ? (
        
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Hero lenguage={lenguage} modo={modo} />
          <Tec lenguage={lenguage} modo={modo} />
           <Project lenguage={lenguage} modo={modo} />
          <Educacao lenguage={lenguage} modo={modo} />
        </div>
      ) : (
       
        <>
          {nomeComponente === "Hero" && <Hero modo={modo} lenguage={lenguage} />}
          {nomeComponente === "Tec" && <Tec modo={modo} lenguage={lenguage} />}
          {nomeComponente === "Project" && <Project modo={modo} lenguage={lenguage} />}
          {nomeComponente === "Educacao" && <Educacao modo={modo} lenguage={lenguage} />}
        </>
      )}
    </>
  );
}



export default App