import { useState } from "react"
import { addToCart } from "./CardPizza"


export default function CardCombo( { background, name, price, content } ) {

    const [bebida, setBebida] = useState('')

    return (
        <div className="card-combo bg-white m-4 rounded-5 mx-auto">
            <img src={background} alt=""  className="rounded-5"/>
            <section className="content-combo d-flex flex-column justify-content-evenly">
                <div>
                    <p className="fs-1 combo-title">{name}</p>
                    <p className="fs-5">{content}</p>

                </div>
                <div className="d-flex">
                    <label>
                        <input
                            type="radio"
                            name={name}
                            className="d-none"
                            value='Coca 200ml'
                            onChange={(e)=>setBebida(e.target.value)}
                        />
                        <p className="fs-5">Coca 200ml</p>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name={name}
                            className="d-none"
                            value='Suco de laranja 300ml'
                            onChange={(e)=>setBebida(e.target.value)}
                        />
                        <p className="fs-5">Suco de laranja 300ml</p>
                    </label>
                </div>
                <div className="d-flex w-100 justify-content-around">
                    <p className="fs-4 text-danger my-auto">R${price},00</p>
                    <button className="rounded-3 py-2 px-4" onClick={() => {
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