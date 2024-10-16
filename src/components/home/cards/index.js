import '../../../styles/home/cards/index.css'
import senhoresCabecasDeBatata from '../../../assets/senhores-cabecas-de-batata.png'
import amigoEstouAqui from '../../../assets/amigo-estou-aqui.png'
import saborIntergalactico from '../../../assets/sabor-intergalactico.png'
import doceAventuraEspacial from '../../../assets/doce-aventura-espacial.png'

export default function Cards() {
    return (
        <div className="container-fluid d-flex images my-5">
            <div className="image">
                <a href="#Senhores cabeças de batata">
                    <img src={senhoresCabecasDeBatata} alt=""  className="img-fluid"/>
                </a>
            </div>
            <div className="image">
                <a href="#Amigo estou aqui">
                    <img src={amigoEstouAqui} alt=""  className="img-fluid"/>
                </a>
            </div>
            <div className="image">
                <a href="#Sabor intergalactico">
                    <img src={saborIntergalactico} alt=""  className="img-fluid"/>
                </a>
            </div>
            <div className="image">
                <a href="#Doce aventura espacial">
                    <img src={doceAventuraEspacial} alt=""  className="img-fluid"/>
                </a>
            </div>
        </div>
    )
}