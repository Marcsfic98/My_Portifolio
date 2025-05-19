import "./Educacao.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from "react";

// 1️⃣  Tipo das props
interface HeroProps {
  modo: "sol" | "lua";   // se preferir string simples: string
}

// 2️⃣  Desestruturação das props
const Educacao : React.FC<HeroProps> = ({ modo }) =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
      <>
       <div className={`educacao ${modo ==='sol' ? 'b' : "w"}`}>
            <div className="container">
                
                <div className="Formacao">
                    <h2>Formação :</h2>
                    <p>cursando analize e desenvolvimento de sistemas | Universidade Mauricio de Nassau | 1° Periodo</p>
                </div>
                
                <div className="cursos">
                    <h3>Certificados:</h3>
                    <Slider {...settings}>
                    <div className="cursos_box">
                        <div className="cursos_wraper border c1">

                        </div>
                    </div>

                    <div className="cursos_box">
                        <div className="cursos_wraper  border c2">

                        </div>
                    </div>

                    <div className="cursos_box">
                        <div className="cursos_wraper  border c3">

                        </div>
                    </div>

                    <div className="cursos_box">
                        <div className="cursos_wraper  border c4">

                        </div>
                    </div>
                    </Slider>
                </div>
                
            </div>
       </div>
      </>
    )
  }
  
  export default Educacao
  