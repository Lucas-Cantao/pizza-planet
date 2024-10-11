import '../../styles/cart/index.css'
import { useState, useEffect } from 'react';
import { initialPizzas } from '../home/carrocelPizzas/CardPizza';
import { Link } from 'react-router-dom';


export let totalExport = 0;
export let refriExport;

export default function Cart(){

    const [pizzas, setPizzas] = useState(initialPizzas);
    const [total, setTotal] = useState(0);


    useEffect(() => {
        let newTotal = 0;
        pizzas.forEach(pizza => {
            newTotal += (pizza.price *  pizza.quantidade)
        })
        setTotal(newTotal)
        totalExport = newTotal;
    }, [pizzas]);

    const updateQuant = (index, oper) => {
        const newPizzas = [...pizzas];
        if (oper === '-') {
            newPizzas[index].quantidade -= 1;
            if (newPizzas[index].quantidade === 0) {
                newPizzas.splice(index, 1);
                initialPizzas.splice(index, 1);
                console.log(newPizzas);
                
            }
        } else {
            newPizzas[index].quantidade += 1;
        }
        setPizzas(newPizzas);
    };

    return (
        <div className="container-sm">
            <p className="title fs-1">Carrinho</p>
            {pizzas.length > 0 ? (
                <>
                    <section className="d-flex flex-wrap mt-5 pizzasFav">
                        {pizzas.map((pizza, index) => (
                            <div className="pizzaFav d-flex my-3" key={index}>
                                <img src={pizza.background} alt="" />
                                <div className="m-3">
                                    <p className="fs-3">{pizza.name}</p>
                                    <span className="fs-4 price">R${pizza.price.toString().replace('.', ',')}</span>
                                    <div className="d-flex">
                                        <i className="bi bi-dash-circle fs-1 title cursor-pointer" onClick={() => updateQuant(index, '-')}></i>
                                        <p className="my-auto mx-3 fs-4">{pizza.quantidade}</p>
                                        <i className="bi bi-plus-circle fs-1 title cursor-pointer" onClick={() => updateQuant(index, '+')}></i>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                    <p className='fs-4 title'>TOTAL: R${parseFloat(total).toFixed(2).toString().replace('.', ',')}</p>
                    <Link to='/endOrder' className='endOrder-link'>
                        <button className='endOrder'>
                            Finalizar pedido
                        </button>
                    </Link>
                </>
            ) : (
                <p>Sem pizzas no carrinho</p>
            )}
        </div>
    );
}
