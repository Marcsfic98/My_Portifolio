import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faCss3,
  faHtml5,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
// Importe faCss3 diretamente, se não for um problema (como no seu código original)
// import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3"; // Se preferir manter este import específico
import "./Tecnologia.css";
import React from "react";
import Slider from "react-slick"; // Importe o Slider

interface HeroProps {
  modo: "sol" | "lua";
}

const Tec: React.FC<HeroProps> = ({ modo }) => {
  const settings = {
    dots: false, // Geralmente removemos para carrosséis contínuos
    infinite: true,
    speed: 2000, // Velocidade da transição. Experimente valores como 500, 300, 0
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Essencial para "sem delay" - o slide não para
    cssEase: "linear", // Essencial para fluidez constante
    arrows: false, // Remova os botões laterais se desejar
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
          arrows: false,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplaySpeed: 0,
          cssEase: "linear",
        },
      },
    ],
  };


  return (
    <>
      <div className={`tecnologias ${modo === "sol" ? "b" : "w"}`}>
        <div className="container">
          <h2>TECNOLOGIAS</h2>
          <h3>LINGUAGENS DE PROGRAMAÇÃO E FERRAMENTAS</h3>
          <div className="logos">
            <Slider {...settings}>
              
              <div>
                <FontAwesomeIcon className="icon" icon={faHtml5} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faCss3} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faSass} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faLess} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faJsSquare} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faReact} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faGit} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faHtml5} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faCss3} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faSass} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faLess} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faJsSquare} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faReact} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faGit} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faHtml5} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faCss3} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faSass} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faLess} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faJsSquare} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faReact} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faGit} />
              </div>
            </Slider>
          </div>

          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>NodeJs</p>
          <p>Sass e Less</p>
          <p>Firebase</p>
          <p>Git</p>
          <p>UX UI</p>
          <p>Typescript</p>
        </div>
      </div>
    </>
  );
};

export default Tec;