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

import "./Tecnologia.css";
import React from "react";
import Slider from "react-slick"; 

interface HeroProps {
  modo: "sol" | "lua";
  lenguage:"br" | "eua";
}

const Tec: React.FC<HeroProps> = ({ modo , lenguage}) => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 2000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, 
    cssEase: "linear",
    arrows: false,
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
          {
            lenguage === "br"?(
              <>
                <h2>TECNOLOGIAS:</h2>
                <h3>LINGUAGENS DE PROGRAMAÇÃO E FERRAMENTAS</h3>
              </>
            ):<>
                <h2>TECHNOLOGIES:</h2>
                <h3>PROGRAMMING LANGUAGES AND TOOLS</h3>
              </>
          }
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
          <p>Styled Components</p>
        </div>
      </div>
    </>
  );
};

export default Tec;