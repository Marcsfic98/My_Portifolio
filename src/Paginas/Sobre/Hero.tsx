

  // Hero.tsx (ou Hero.jsx se não usar TSX no nome)
import "./Hero.css";
import React from "react";

// 1️⃣  Tipo das props
interface HeroProps {
  modo: "sol" | "lua";   // se preferir string simples: string
}

// 2️⃣  Desestruturação das props
const Hero: React.FC<HeroProps> = ({ modo }) => {
  return (
    <div  className={`sobre  ${modo ==='sol' ? 'b' : "w"} `}>
       
    <div className="container">
           <div className="img"></div>
        <h2><b>Olá , sou  </b>Marcos Ribeiro</h2>
        <h3>MARCSFIC98@GMAIL.COM</h3>
        <p>Como amante de jogos , eletrônicos e tecnologia , desde pequeno sonhava em trabalhar na área . E estudando criei um apreço maior ainda pelo ramo da programação e a vertente do Front-End que dá vida e personalidade as páginas e aplicativos.

            Almejo a oportunidade de ingressar na carreira de desenvolvedor e poder trabalhar com o que amo . 
            Em busca de novos desafios para testar meus conhecimentos , habilidades e aprender muito mais sobre essa área maravilhosa! 

            Atualmente curso Análise e Desenvolvimento de Sistemas e estudo sobre a Área de Front - End em cursos … 
            Almejo me especializar no desenvolvimento Móbile </p>
    </div>
</div>
  );
};

export default Hero;