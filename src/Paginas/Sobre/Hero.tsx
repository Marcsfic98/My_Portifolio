
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.css";
import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";


interface HeroProps {
  modo: "sol" | "lua";
  lenguage:"br" | "eua";
}


const Hero: React.FC<HeroProps> = ({ modo ,lenguage }) => {
  return (
    <div  className={`sobre  ${modo ==='sol' ? 'b' : "w"} `}>
       
       {
        lenguage === "br" &&(
           <div className="container">
           <div className="img"></div>
        <h2><b>Olá, sou  </b>
          <span>
            <span>Marcos Ribeiro</span>
            <span>Desenvolvedor Full Stack</span>
            <span>Desenvolvedor Front End</span>
            <span>Desenvolvedor Mobile</span>
            <span>Programador</span>
            
          </span></h2>
       

        

        <h3>
          Sou Marcos Ribeiro tenho 27 anos e minha jornada na tecnologia começou 'na ponta', trabalhando por dois anos como instalador de internet.<br/><br/>  Essa experiência foi fundamental para eu entender a infraestrutura e despertar minha paixão por como os sistemas funcionam,<br/> o que me levou a migrar para a área de desenvolvimento.<br/> <br/> 
          Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas e atuo como Desenvolvedor Full Stack há dois anos.<br/>  Durante esse período, foquei em dominar as tecnologias mais requisitadas do mercado,<br/>  mas sempre com um olhar atento para a entrega de valor real em cada projeto.<br/><br/>
          Hoje, me considero um desenvolvedor versátil, que entende o ciclo completo de um software e sabe como liderar pessoas para <br/>entregar um produto de qualidade.<br/> Meu objetivo agora é aplicar esse conhecimento em desafios maiores, contribuindo para soluções escaláveis e eficientes
        </h3>

            <div className="link">
          <a target="_blank" href="https://github.com/Marcsfic98"><FontAwesomeIcon className="icon"  icon={faGithub} /></a>
          <a target="_blank" href="https://www.linkedin.com/in/marcos-alexandre-129b93272/"><FontAwesomeIcon className="icon"   icon={faLinkedin} /></a>
          <a target="_blank" href="mailto:marcsfic98@gmail.com"><FontAwesomeIcon className="icon"   icon={faEnvelope}/></a>
        </div>
        
    </div>
        )
        
       }

       {
        lenguage === "eua" &&(
           <div className="container">
           <div className="img"></div>
        <h2><b>Hello, I am</b>
          <span>
            <span>Marcos Ribeiro</span>
            <span>Full Stack Developer</span>
            <span>Front End Developer</span>
            <span>Mobile Developer</span>
            <span>Programmer</span>
            
          </span></h2>
       

        

            <h3>
          I’m Marcos Ribeiro, I’m 27 years old, and my journey in technology began 'at the front lines,' working for two years as an internet installer.<br/><br/> This experience was fundamental for me to understand infrastructure and sparked my passion for how systems work,<br/> which led me to migrate to the field of software development.<br/> <br/> 
          Currently, I am a Systems Analysis and Development student and have been working as a Full Stack Developer for two years.<br/> During this period, I focused on mastering the most in-demand technologies in the market,<br/> but always with a keen eye on delivering real value in every project.<br/><br/>
          Today, I consider myself a versatile developer who understands the full software lifecycle and knows how to lead people to <br/>deliver a high-quality product.<br/> My goal now is to apply this knowledge to greater challenges, contributing to scalable and efficient solutions.
</h3>
            <div className="link">
          <a target="_blank" href="https://github.com/Marcsfic98"><FontAwesomeIcon className="icon"  icon={faGithub} /></a>
          <a target="_blank" href="https://www.linkedin.com/in/marcos-alexandre-129b93272/"><FontAwesomeIcon className="icon"   icon={faLinkedin} /></a>
          <a target="_blank" href="mailto:marcsfic98@gmail.com"><FontAwesomeIcon className="icon"   icon={faEnvelope}/></a>
        </div>
        
    </div>
        )
        
       }
    

       
  </div>
  );
};

export default Hero;