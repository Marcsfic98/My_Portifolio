
import "./App.css"
import "../src/pages/Home/Menu.css"
import Hero from "./pages/Home/sections/Hero";
import Tec from "./pages/Home/sections/Tecnologia";
import Project from "./pages/Home/sections/Project";
import Educacao from "./pages/Home/sections/Educacao"
import  { useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";




const App = ()=> {

  
   
  
  const [menuOpen, setMenuOpen] = useState(false); // Novo estado para controle do menu
  const [nomeComponente, setNomeComponente] = useState("Hero") ;

  const mostraComponente = (nomeComponenteSelecionado:string, idDoLink:string)=>{

    setNomeComponente(nomeComponenteSelecionado);
    setActiveLink(idDoLink);
  }

  const [activeLink, setActiveLink] = useState('Hero'); // Novo estado para rastrear o link ativo



  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Opcional: fechar o menu ao clicar em um link
  const handleLinkClick = (nome:string, id:string) => {
    mostraComponente(nome, id);
    setMenuOpen(false);
  };


  return (
    <>
   <i className="menu_mobile" onClick={toggleMenu}>
        <FontAwesomeIcon className="icon" icon={faBars} />
      </i>
      <div className={`home ${menuOpen ? 'show' : ''}`}>

        <div className="img"></div>
        <br />
        <a id="Hero" href="#" className={activeLink === "Hero" ? 'active' : ''} onClick={(e) => {
          e.defaultPrevented;
          mostraComponente("Hero", "Hero")
          handleLinkClick("Hero", "Hero")
        }}>SOBRE</a>
        <a id="Tec" href="#" className={activeLink === "Tec" ? 'active' : ''} onClick={(e) => {
          e.defaultPrevented;
          mostraComponente("Tec", "Tec")
          handleLinkClick("Tec", "Tec")
        }}>TECNOLOGIAS</a>
        <a id="Project" href="#" className={activeLink === "Project" ? 'active' : ''} onClick={(e) => {
          e.defaultPrevented;
          mostraComponente("Project", "Project")
          handleLinkClick("Project", "Project")
        }}>PROJETOS</a>
        <a id="Educacao" href="#" className={activeLink === "Educacao" ? 'active' : ''} onClick={(e) => {
          e.defaultPrevented;
          mostraComponente("Educacao", "Educacao")
          handleLinkClick("Educacao", "Educacao")
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


