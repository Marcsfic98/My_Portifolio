
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import"./Project.css"
import React from "react";


interface HeroProps {
  modo: "sol" | "lua";
  lenguage:"br" | "eua";
}


const Project: React.FC<HeroProps> = ({ modo , lenguage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
  
    <div  className={`project ${modo ==='sol' ? 'b' : "w"}`}>
      <div className="container">
        <h2>{lenguage === "br" ? "Alguns Projetos:" : "Some Projects:"}</h2>
        <Slider {...settings}>

           <div className='border'>
          <div className="projeto_box">
            <div className="projeto_gif gif7"></div>
            <h3>SportShopping</h3>
            <div className="projeto_info">
              
              <p>E-comerce para venda de roupas e artigos esportivos , site 100% funcinal com pagina de vendas estoque e validação de cartão e uso de api para controle das mercadorias , feito com React,JavaScript , Typescript , Styled Components</p>
            </div>
            <div className="projeto_tec">
              <a href="https://github.com/Marcsfic98/sportshopping.git">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="https://sportshopping-f2858.web.app/cart/checkout">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </a>
            </div>
          </div>
            </div>

           <div className='border'>
          <div className="projeto_box">
            <div className="projeto_gif_app gif2"></div>
            <h3>Helia</h3>
            <div className="projeto_info">
              
              <p>App criado de aluguel de casas e apartamentos , feito com React native , expo e Typescript</p>
            </div>
            <div className="projeto_tec">
              <a href="https://github.com/Marcsfic98/helia.git">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="https://github.com/Marcsfic98/helia.git">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </a>
            </div>
          </div>
            </div>

            <div className='border'>
          <div className="projeto_box">
            <div className="projeto_gif gif8"><div className='projeto_gif_img'></div></div>
            <h3>GitFind</h3>
            <div className="projeto_info">
              
              <p>Web site que utiliza a api do GitHub para buscar com base no nome do usuario os seus projetos.  feito usando React ,Javascript e Typescript</p>
            </div>
            <div className="projeto_tec">
              <a href="https://github.com/Marcsfic98/Git-find.git">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="https://github.com/Marcsfic98/Git-find.git">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </a>
            </div>
          </div>
            </div>

            <div className='border'>
              <div className="projeto_box ">
                  <div className="projeto_gif gif1"></div>
                  <h3>Rm cars</h3>
                  <div className="projeto_info">
                    
                    <p>Projeto para site de vendas de carros , com formulario de contato , imagens dos carros disponiveis e sistema de filtro de valores . Feito com Html , Css e Jquerry</p>
                  </div>

              <div className="projeto_tec">
                <a href="https://github.com/Marcsfic98/Rmcars">
                  <FontAwesomeIcon className="icon" icon={faGithub} />
                </a>
                <a href="">
                  <FontAwesomeIcon className="icon" icon={faLink} />
                </a>
              </div>

            </div>
          </div>


            <div className='border'>
          <div className="projeto_box">
            <div className="projeto_gif gif3"></div>
            <h3>Monguilhott</h3>
            <div className="projeto_info">
              
              <p>Site realizado para consultorio odontologico , com funcionalidades em links e menus . Totalmente responsivo. Utilizando Html ,Css e Javascript</p>
            </div>
            <div className="projeto_tec">
              <a href="https://github.com/Marcsfic98/monguilhott">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </a>
            </div>
          </div>
            </div>

            <div className='border'>
          <div className="projeto_box ">
            <div className="projeto_gif gif4"></div>
            <h3>Painel Monki</h3>
            <div className="projeto_info">
              
              <p>Projeto de Dashboard para atender solicitações de clientes e configuraçoes , totalmente responsivo. Feito com Html , Css e Jquerry</p>
            </div>
            <div className="projeto_tec">
              <a href="https://github.com/Marcsfic98/Dashboard">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </a>
            </div>
          </div>
            </div>

            <div className='border'>
          <div className="projeto_box">
            <div className="projeto_gif gif5"></div>
            <h3>Agência Dank</h3>
            <div className="projeto_info">
              
              <p>Projeto de site para agência de marketing , com informações e contatos para orçamentos e duvias , totalmente responsivo . Projeto realizado com Html , Css e JavaScript</p>
            </div>
            <div className="projeto_tec">
              <a href="">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </a>
            </div>
          </div>
            </div>

            <div className='border'>
          <div className="projeto_box">
            <div className="projeto_gif gif6"></div>
            <h3>GAMEMONKI</h3>
            <div className="projeto_info">
              
              <p>Site realizado para divulgação de um novo game educativo , com links para download e totalmente responsivo . Totalmente responsivo. Utilizando Html ,Css e Javascript</p>
            </div>
            <div className="projeto_tec">
              <a href="">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </a>
              <a href="">
                <FontAwesomeIcon className="icon" icon={faLink} />
              </a>
            </div>
          </div>

          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Project;