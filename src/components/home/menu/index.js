import '../../../styles/home/menu/index.css'
import logo from '../../../assets/logo.png'
import logoGiocatolli from '../../../assets/logo_.png'
import { pizzas } from '../carrocelPizzas/Pizzas'
import { addToCart } from '../carrocelPizzas/CardPizza'
import {useEffect, useState} from 'react'

export default function Menu(){

    const [search, setSearch] = useState('')
    let [pizzaSearch, setPizzaSearch] = useState([]);

    useEffect(() => {
        if (search.trim() === '') {
            // Se o campo de pesquisa estiver vazio, limpa o array de pizzas pesquisadas
            setPizzaSearch([]);
        } else {
            // Caso contrário, realiza a pesquisa e atualiza o array de pizzas pesquisadas
            const filteredPizzas = pizzas.filter(pizza =>
                pizza.name.toLowerCase().startsWith(search.toLowerCase())
            );
            setPizzaSearch(filteredPizzas);
        }
    }, [search]);

    return (
        <div className="container-sm justify-content-between d-flex flex-wrap gap-3 mt-3">
            <div className='d-flex order-1 flex-grow-1'>
                <img src={logoGiocatolli} alt="" className='logo-giocatolli'/>
                <p className="title fs-1 my-auto">Menu</p>
            </div>
            <label className="my-auto px-3 order-3 order-md-2 w-md-100 rounded-pill d-flex input-menu">
                <i className="bi bi-search pe-3 my-auto cursor-pointer"></i>
                <input
                    className="py-2 px-3 fs-5 w-100"
                    type="text"
                    id="input-search"
                    placeholder="Pizza de..."
                    autoComplete='off'
                    onChange={e => setSearch(e.target.value)}
                />
                {pizzaSearch.length > 0 &&
                    <div className="search-result p-4 top-100 w-100 left-0 mt-2">
                    {pizzaSearch.map((pizza, index) => (
                        <div className="d-flex pizza-search my-2">
                            <img src={pizza.background} alt="" />    
                            <div>
                                <p key={index} className="m-2">{pizza.name}</p>
                                <p key={index} className="m-2">R${pizza.price.toString().replace('.', ',')}</p>
                            </div>
                            <button onClick={()=>{addToCart(pizza)}}><i className="bi bi-cart"></i></button>
                        </div>
                    ))}
                    </div>
                }
            </label>
            <div className="ms-4 rounded-circle my-auto order-2 order-md-3 img">
                <img src={logo} alt="" className="img-fluid"/>
            </div>
        </div>
    )
}