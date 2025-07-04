
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
       

        

        <h3>Sou um desenvolvedor front-end apaixonado por criar interfaces intuitivas e eficientes. Tenho proficiência com tecnologias como JavaScript e TypeScript, o que me permite desenvolver aplicações robustas, seguras e de alta performance.<br/><br/> Sou fã do React e React Native, frameworks que utilizo para construir experiências de usuário modernas tanto para web quanto para dispositivos móveis. Meu foco é transformar ideias em soluções visuais atraentes e funcionais, sempre buscando melhorar a usabilidade e a performance dos projetos em que atuo. Estou constantemente atualizado com as tendências do mercado e buscando aprimorar minhas habilidades, especialmente no desenvolvimento mobile e web.<br/><br/> Meu objetivo é me tornar um especialista nessas áreas, entregando produtos de alta qualidade e que atendam às necessidades dos usuários. Acredito que a combinação de criatividade, conhecimento técnico e atenção aos detalhes é fundamental para criar aplicações que façam a diferença. Tenho facilidade para aprender novas tecnologias e trabalhar em equipe, sempre buscando colaborar e contribuir com o sucesso dos projetos.<br/><br/> Estou motivado a evoluir na minha carreira, enfrentando novos desafios e conquistando resultados cada vez melhores. Para mim, o desenvolvimento front-end é uma paixão e uma oportunidade de transformar ideias em realidade digital. Estou animado para continuar aprendendo e crescendo como profissional na área de tecnologia. </h3>

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