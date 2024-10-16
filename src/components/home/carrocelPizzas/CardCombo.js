import { useState } from "react"
import { addToCart } from "./CardPizza"


export default function CardCombo( { background, name, price, content } ) {

    const [bebida, setBebida] = useState('')

    return (
        <div className="card-combo bg-white m-4 mx-auto" id={name}>
            <img src={background} alt=""/>
            <section className="content-combo d-flex flex-column justify-content-evenly">
                <div>
                    <p className="fs-1 combo-title">{name}</p>
                    <p className="fs-5">{content}</p>

                </div>
                <div className="d-flex bebidas">
                    <label className="cursor-pointer">
                        <input
                            type="radio"
                            name={name}
                            className="d-none"
                            value='Coca 200ml'
                            onChange={(e)=>setBebida(e.target.value)}
                        />
                        <p>Coca 200ml</p>
                    </label>
                    <label className="cursor-pointer">
                        <input
                            type="radio"
                            name={name}
                            className="d-none"
                            value='Suco de laranja 300ml'
                            onChange={(e)=>setBebida(e.target.value)}
                        />
                        <p>Suco de laranja 300ml</p>
                    </label>
                </div>
                <div className="d-flex w-100 justify-content-around footer-combo">
                    <p className="fs-4 text-danger my-auto mx-auto">R${price},00</p>
                    <button className="rounded-3 py-2 px-4 mx-auto" onClick={() => {
                        if(bebida !== ''){
                            addToCart({
                                background: background,
                                name: name,
                                price: price,
                                quantidade: 1,
                                config: `1 ${bebida}`
                            })
                        }
                    }}>
                        Adicionar
                        <i className="bi bi-cart"></i>
                    </button>
                </div>
            </section>
        </div>

    )
}