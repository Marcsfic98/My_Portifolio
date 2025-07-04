
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.css";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";

// 1️⃣  Tipo das props
interface HeroProps {
  modo: "sol" | "lua";
}


const Hero: React.FC<HeroProps> = ({ modo }) => {
  return (
    <div  className={`sobre  ${modo ==='sol' ? 'b' : "w"} `}>
       
    <div className="container">
           <div className="img"></div>
        <h2><b>Olá , sou  </b>
          <span>
            <span>Marcos Ribeiro</span>
            <span>Desenvolvedor Front-End</span>
            <span>Desenvolvedor Web</span>
            <span>Desenvolvedor Mobile</span>
            <span>Programador</span>
            
          </span></h2>
       

        

        <h3>Como amante de jogos , eletrônicos e tecnologia , desde pequeno sonhava em trabalhar na área . E estudando criei um apreço maior ainda pelo ramo da programação e a vertente do Front-End que dá vida e personalidade as páginas e aplicativos.

            Almejo a oportunidade de ingressar na carreira de desenvolvedor e poder trabalhar com o que amo . 
            Em busca de novos desafios para testar meus conhecimentos , habilidades e aprender muito mais sobre essa área maravilhosa! 

            Atualmente curso Análise e Desenvolvimento de Sistemas e estudo sobre a Área de Front - End em cursos … 
            Almejo me especializar no desenvolvimento Móbile </h3>

            <div className="link">
          <a target="_blank" href="https://github.com/Marcsfic98"><FontAwesomeIcon className="icon"  icon={faGithub} /></a>
          <a target="_blank" href="https://www.linkedin.com/in/marcos-alexandre-129b93272/"><FontAwesomeIcon className="icon"   icon={faLinkedin} /></a>
          <a target="_blank" href="mailto:marcsfic98@gmail.com"><FontAwesomeIcon className="icon"   icon={faEnvelope}/></a>
        </div>
        
    </div>
</div>
  );
};

export default Hero;