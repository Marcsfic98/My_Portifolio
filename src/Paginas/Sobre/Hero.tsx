
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
        )
        
       }

       {
        lenguage === "eua" &&(
           <div className="container">
           <div className="img"></div>
        <h2><b>Hello, I am</b>
          <span>
            <span>Marcos Ribeiro</span>
            <span>Front-End Developer</span>
            <span>Web Developer</span>
            <span>Mobile Developer</span>
            <span>Programmer</span>
            
          </span></h2>
       

        

            <h3>I'm a front-end developer passionate about creating intuitive and efficient interfaces. I'm proficient in technologies like JavaScript and TypeScript, which allows me to develop robust, secure, and high-performance applications.<br/><br/> I'm a fan of React and React Native, frameworks I use to build modern user experiences for both web and mobile devices. My focus is to transform ideas into attractive and functional visual solutions, always seeking to improve the usability and performance of the projects I work on. I'm constantly updated with market trends and seeking to improve my skills, especially in mobile and web development.<br/><br/> My goal is to become a specialist in these areas, delivering high-quality products that meet users' needs. I believe that the combination of creativity, technical knowledge, and attention to detail is fundamental to creating applications that make a difference. I have an aptitude for learning new technologies and working in a team, always seeking to collaborate and contribute to the success of projects.<br/><br/> I'm motivated to evolve in my career, facing new challenges and achieving increasingly better results. For me, front-end development is a passion and an opportunity to transform ideas into digital reality. I'm excited to continue learning and growing as a professional in the technology field.</h3>

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