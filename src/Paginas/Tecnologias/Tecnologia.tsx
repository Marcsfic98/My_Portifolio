import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faCss3,
  faHtml5,
  faReact,
  faNodeJs,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiEslint } from "react-icons/si";
import { SiPrettier } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiJest } from "react-icons/si";

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
                <TbBrandNextjs className="icon" />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faReact} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faJsSquare} />
              </div>
              <div>
                <SiTypescript className="icon"/>
              </div>
              <div>
                <SiExpress className="icon"/>
                </div>  
              <div>
                <RiTailwindCssFill className="icon" />
              </div>  
              <div>
                <SiNestjs className="icon" />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faGit} />
              </div>
              <div>
                <SiEslint  className="icon"/>
              </div>
              <div>
                <SiPrettier className="icon"/>
              </div>
              <div>
                <BiLogoPostgresql className="icon"/>
              </div>
              <div>
                <SiMysql className="icon"/>
              </div>
                <div>
                <FontAwesomeIcon className="icon" icon={faHtml5} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faCss3} />
              </div>
              <div>
                <TbBrandNextjs className="icon" />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faReact} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faJsSquare} />
              </div>
              <div>
                <SiTypescript className="icon"/>
              </div>
              <div>
                <SiExpress className="icon"/>
                </div>  
              <div>
                <RiTailwindCssFill className="icon" />
              </div>  
              <div>
                <SiNestjs className="icon" />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faGit} />
              </div>
              <div>
                <SiEslint  className="icon"/>
              </div>
              <div>
                <SiPrettier className="icon"/>
              </div>
              <div>
                <BiLogoPostgresql className="icon"/>
              </div>
              <div>
                <SiMysql className="icon"/>
              </div>
                <div>
                <FontAwesomeIcon className="icon" icon={faHtml5} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faCss3} />
              </div>
              <div>
                <TbBrandNextjs className="icon" />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faReact} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faJsSquare} />
              </div>
              <div>
                <SiTypescript className="icon"/>
              </div>
              <div>
                <SiExpress className="icon"/>
                </div>  
              <div>
                <RiTailwindCssFill className="icon" />
              </div>  
              <div>
                <SiNestjs className="icon" />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faGit} />
              </div>
              <div>
                <SiEslint  className="icon"/>
              </div>
              <div>
                <SiPrettier className="icon"/>
              </div>
              <div>
                <BiLogoPostgresql className="icon"/>
              </div>
              <div>
                <SiMysql className="icon"/>
              </div>
              <div>
                <SiJest className="icon"/>
              </div>
              
            </Slider>
          </div>

          <div className="stacks">
             {
            lenguage === "br"?(
                <p>LINGUAGENS</p>
              ):
                <p>LANGUAGES</p> 
            }
              <h3>JAVASCRIPT, TYPESCRIPT</h3>
          </div>

          <div className="stacks">
                {
            lenguage === "br"?(
                <p>FRAMEWORKS E BIBLIOTECAS</p>
              ):
                <p>FRAMEWORKS AND LIBRARIES</p> 
            }
              <h3>REACT, REACT NATIVE, NEXT.JS, NODE.JS, NEST.JS, EXPRESS</h3>
          </div>

          <div className="stacks">
                {
            lenguage === "br"?(
                <p>FERRAMENTAS E TESTES</p>
              ):
                <p>TOOLS AND TESTS</p> 
            }
              <h3>JEST, ESLINT, PRETTIER, GIT, GITHUB</h3>
          </div>

             <div className="stacks">
                {
            lenguage === "br"?(
                <p>BANCO DE DADOS</p>
              ):
                <p>DATABASES</p> 
            }
              <h3>POSTGRESQL, MYSQL, MONGODB</h3>
          </div>


        </div>
      </div>
    </>
  );
};

export default Tec;