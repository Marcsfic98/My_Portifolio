
import "./App.css"
import "../Menu/Menu.css"
import Hero from "../Sobre/Hero";
import Tec from "../Tecnologias/Tecnologia";
import Project from "../Project/Project";
import Educacao from "../Educacao/Educacao"
import  { useState, useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


const App = ()=> {

  
  const [menuOpen, setMenuOpen] = useState(false); // Novo estado para controle do menu
  const [nomeComponente, setNomeComponente] = useState("Hero") ;
  const [modo , setModo ] = useState('sol');

   // Estado para controlar se a tela é pequena
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

   // Detectar mudanças no tamanho da janela
   useEffect(() => {
     const handleResize = () => {
       setIsMobile(window.innerWidth <= 768);
     };
 
     window.addEventListener('resize', handleResize);
 
     // Limpar o evento ao desmontar o componente
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
      <div className={` home pages ${modo === 'sol'? 'b' : "w"} ${menuOpen ? 'show' : ''}`}>
        
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
      </div>


      {isMobile ? (
        // Em telas menores, empilha os componentes
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Hero modo={modo} />
          <Tec modo={modo} />
           <Project modo={modo} />
          <Educacao modo={modo} />
        </div>
      ) : (
        // Em telas maiores, mantém a disposição original ou como desejar
        <>
          {nomeComponente === "Hero" && <Hero modo={modo} />}
          {nomeComponente === "Tec" && <Tec modo={modo} />}
          {nomeComponente === "Project" && <Project modo={modo} />}
          {nomeComponente === "Educacao" && <Educacao modo={modo} />}
        </>
      )}
    </>
  );
}



export default App


