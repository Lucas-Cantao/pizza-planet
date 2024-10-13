import doceAventuraEspacial from '../../../assets/doce-aventura-espacial.png'
import { useState } from 'react'
import { pizzasDoces } from './Pizzas'
import { addToCart } from './CardPizza'

export default function DoceAventuraEspacial() {

    const [pizzaDoce1, setPizzaDoce1] = useState('')
    const [pizzaDoce2, setPizzaDoce2] = useState('')
    const [bebida, setBebida] = useState('')

    return (
        <div className="card-combo bg-white m-4 rounded-5 mx-auto">
            <img src={doceAventuraEspacial} alt=""  className="rounded-5"/>
            <section className="content-combo d-flex flex-column justify-content-evenly">
                <div>
                    <p className="fs-1 combo-title">Doce aventura espacial</p>
                    <p className="fs-5">Experimente o Combo Doce Aventura Espacial, que inclui duas deliciosas mini pizzas doces, escolhidas por VOCÊ conforme a disponibilidade do cardápio. Para completar a experiência, você pode escolher entre um suco refrescante ou um refrigerante pequeno. É a combinação perfeita para uma viagem de sabores intergalácticos!</p>
                </div>
                <div className='d-flex selects'>
                    <div className='select-pizzas'>
                        <p className='fs-5'>Escolha a 1° mini-pizza:</p>
                        <div className='d-flex gap-3 flex-nowrap overflow-auto pizzas'>
                            {pizzasDoces.map(pizza => (
                                <label>
                                    <input 
                                        type="radio"
                                        name='pizzaDoce1'
                                        className='d-none'
                                        value={pizza.name}
                                        onChange={(e)=>{
                                            setPizzaDoce1(e.target.value)
                                        }}    
                                    />
                                    <span>{pizza.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className='select-pizzas'>
                        <p className='fs-5'>Escolha a 2° mini-pizza:</p>
                        <div className='d-flex gap-3 flex-nowrap overflow-auto pizzas'>
                            {pizzasDoces.map(pizza => (
                                <label>
                                    <input 
                                        type="radio"
                                        name='pizzaDoce2'
                                        className='d-none'
                                        value={pizza.name}
                                        onChange={(e)=>{
                                            setPizzaDoce2(e.target.value)
                                        }}    
                                    />
                                    <span>{pizza.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="d-flex">
                    <label>
                        <input
                            type="radio"
                            name="Doce aventura espacial"
                            className="d-none"
                            value='Coca 200ml'
                            onChange={(e)=>setBebida(e.target.value)}
                        />
                        <p className='fs-5'>Coca 200ml</p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="Doce aventura espacial"
                            className="d-none"
                            value='Suco de laranja 300ml'
                            onChange={(e)=>setBebida(e.target.value)}
                        />
                        <p className='fs-5'>Suco de laranja 300ml</p>
                    </label>
                </div>
                <div className="d-flex w-100 justify-content-around footer-combo">
                    <p className="fs-4 text-danger my-auto">R$17,00</p>
                    <button className="rounded-3 py-2 px-4" onClick={() => {
                        if(bebida !== ''  || pizzaDoce1 !== '' || pizzaDoce2 !== ''){
                            addToCart({
                                background: doceAventuraEspacial,
                                name: 'Doce aventura espacial',
                                price: 16,
                                quantidade: 1,
                                config: `1 ${pizzaDoce1}  + 1 ${pizzaDoce2} + 1 ${bebida}`
                            })
                            setBebida('')
                            setPizzaDoce1('')
                            setPizzaDoce2('')
                    }}}>
                        Adicionar
                        <i className="bi bi-cart"></i>
                    </button>
                </div>
            </section>
        </div>
    )
}