import '../../../styles/home/cards/index.css'
import frangoCatupiry from '../../../assets/pizza-frango-catupiry.jpg'
import pizzaMussarela from '../../../assets/pizza-mussarela.jpg'
import pizzaPortuguesa from '../../../assets/pizza-portuguesa.jpg'
import pizzaCalabresa from '../../../assets/pizza-calabresa.jpeg'

export default function Cards() {
    return (
        <div className="container-fluid d-flex images my-5">
            <div className="image">
                <img src={frangoCatupiry} alt=""  className="img-fluid"/>
            </div>
            <div className="image">
                <img src={pizzaMussarela} alt=""  className="img-fluid"/>
            </div>
            <div className="image">
                <img src={pizzaPortuguesa} alt=""  className="img-fluid"/>
            </div>
            <div className="image">
                <img src={pizzaCalabresa} alt=""  className="img-fluid"/>
            </div>
        </div>
    )
}