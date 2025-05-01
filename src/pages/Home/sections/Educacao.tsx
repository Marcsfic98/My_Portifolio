import "./Educacao.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Educacao = ()=> {
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
       <div className="educacao">
            <div className="container">
                
                <div className="Formacao">
                    <h3>Formação :</h3>
                    <p>cursando analize e desenvolvimento de sistemas | Universidade Mauricio de Nassau | 1° Periodo</p>
                </div>
                
                <div className="cursos">
                    <h3>Certificados:</h3>
                    <Slider {...settings}>
                    <div className="cursos_box">
                        <div className="cursos_wraper c1">

                        </div>
                    </div>

                    <div className="cursos_box">
                        <div className="cursos_wraper c2">

                        </div>
                    </div>

                    <div className="cursos_box">
                        <div className="cursos_wraper c3">

                        </div>
                    </div>

                    <div className="cursos_box">
                        <div className="cursos_wraper c4">

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
  