import saborIntergalactico from '../../../assets/sabor-intergalactico.png'
import { useState } from 'react'
import { pizzas } from './Pizzas'
import { addToCart } from './CardPizza'

export default function SaborIntergalactico(){

    const [pizza1, setPizza1] = useState('')
    const [pizza2, setPizza2] = useState('')
    const [bebida,  setBebida] = useState('')


    return (
        <div className="card-combo bg-white m-4 mx-auto" id='Sabor intergalactico'>
            <img src={saborIntergalactico} alt=""/>
            <section className="content-combo d-flex flex-column justify-content-evenly">
                <div>
                    <p className="fs-1 combo-title">Sabor intergaláctico</p>
                    <p className="fs-5">O Combo Sabor Intergaláctico é a escolha perfeita para quem deseja uma refeição rápida e personalizada. Ele inclui duas mini-pizzas com o sabor de sua preferência, escolhidos entre as deliciosas opções disponíveis no nosso cardápio. Para completar, você pode acompanhar com um refrescante suco ou um refrigerante pequeno, também de sua escolha. Esse combo é ideal para quem quer combinar praticidade com sabor!</p>
                </div>
                <div className='d-flex selects'>
                    <div className='select-pizzas'>
                        <p className='fs-5'>Escolha a 1° mini-pizza:</p>
                        <div className='d-flex gap-3 flex-nowrap overflow-auto pizzas'>
                            {pizzas.map(pizza => (
                                <label>
                                    <input 
                                        type="radio"
                                        name='pizza1'
                                        className='d-none'
                                        value={pizza.name}
                                        onChange={(e)=>{
                                            setPizza1(e.target.value)
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
                            {pizzas.map(pizza => (
                                <label>
                                    <input 
                                        type="radio"
                                        name='pizza2'
                                        className='d-none'
                                        value={pizza.name}
                                        onChange={(e)=>{
                                            setPizza2(e.target.value)
                                        }}    
                                    />
                                    <span>{pizza.name}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="d-flex bebidas">
                    <label className='cursor-pointer'>
                        <input
                            type="radio"
                            name='Sabor intergalactico'
                            className="d-none"
                            value='Coca 200ml'
                            onChange={(e)=>setBebida(e.target.value)}
                        />
                        <p>Coca 200ml</p>
                    </label>
                    <label className='cursor-pointer'>
                        <input
                            type="radio"
                            name='Sabor intergalactico'
                            className="d-none"
                            value='Suco de laranja 300ml'
                            onChange={(e)=>setBebida(e.target.value)}
                        />
                        <p>Suco de laranja 300ml</p>
                    </label>
                </div>
                <div className="d-flex w-100 justify-content-around footer-combo">
                    <p className="fs-4 text-danger my-auto">R$18,00</p>
                    <button className="rounded-3 py-2 px-4" onClick={() => {
                        if(bebida !== ''  && pizza1 !== '' && pizza2 !== ''){
                            addToCart({
                                background: saborIntergalactico,
                                name: 'Sabor intergaláctico',
                                price: 18,
                                quantidade: 1,
                                config: `1 ${pizza1}  + 1 ${pizza2} + 1 ${bebida}`
                            })
                            setBebida('')
                            setPizza1('')
                            setPizza2('')
                    }}}>
                        Adicionar
                        <i className="bi bi-cart"></i>
                    </button>
                </div>
            </section>
        </div>
    )
}
