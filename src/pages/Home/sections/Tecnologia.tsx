import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJsSquare } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3"
import { faHtml5 } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faSass } from "@fortawesome/free-brands-svg-icons"
import { faLess } from "@fortawesome/free-brands-svg-icons"
import { faGit } from "@fortawesome/free-brands-svg-icons"
import "./Tecnologia.css"

const Tec = ()=> {
  

    return (
      <>
        <div className="tecnologias">
            <div className="container">
                <h2>TECNOLOGIAS</h2>
                <h3>LINGUAGENS DE PROGRAMAÇÃO E FERRAMENTAS</h3>
                <div className="logos">
                <FontAwesomeIcon className="icon" icon={faHtml5} />
                <FontAwesomeIcon className="icon" icon={faCss3} />
                <FontAwesomeIcon className="icon" icon={faSass} />
                <FontAwesomeIcon className="icon" icon={faLess} />
                <FontAwesomeIcon className="icon" icon={faJsSquare} />
                <FontAwesomeIcon className="icon" icon={faReact} />
                <FontAwesomeIcon className="icon" icon={faNodeJs} />
                <FontAwesomeIcon className="icon" icon={faGit} />
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
    )
  }
  
  export default Tec
  