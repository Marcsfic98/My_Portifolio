import "./Hero.css"


const Hero= (modo)=> {
  
    return (
      <>
      
      
        <div  className={`sobre  ${modo.modo ==='sol' ? 'b' : "w"} `}>
       
            <div className="container">
                <h2><b>Olá , sou  </b>Marcos Ribeiro</h2>
                <h3>MARCSFIC98@GMAIL.COM</h3>
                <p>Como amante de jogos , eletrônicos e tecnologia , desde pequeno sonhava em trabalhar na área . E estudando criei um apreço maior ainda pelo ramo da programação e a vertente do Front-End que dá vida e personalidade as páginas e aplicativos.

Almejo a oportunidade de ingressar na carreira de desenvolvedor e poder trabalhar com o que amo . 
Em busca de novos desafios para testar meus conhecimentos , habilidades e aprender muito mais sobre essa área maravilhosa! 

Atualmente curso Análise e Desenvolvimento de Sistemas e estudo sobre a Área de Front - End em cursos … 
Almejo me especializar no desenvolvimento Móbile </p>
            </div>
        </div>
      </>
    )
  }
  
  export default Hero ;
  