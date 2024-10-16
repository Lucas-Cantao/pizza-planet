import '../../../styles/home/carrocelPizzas/index.css'
import CardPizza from './CardPizza'
import CardCombo from './CardCombo'
import { pizzasSalgadas, pizzasDoces, pizzasLimitadas, combos } from './Pizzas'



import SaborIntergalactico from './SaborIntergalactico'
import DoceAventuraEspacial from './DoceAventuraEspacial'



function CarrocelPizzas(){


    return(
        <>
            <div className="container-sm my-5">
                <p className="title fs-1">Pizzas salgadas</p>
                <section className="d-flex flex-nowrap overflow-auto py-3">
                    {pizzasSalgadas.map((pizza) => (
                        <CardPizza background={pizza.background} name={pizza.name} price={pizza.price.toString()}/>
                    ))
                }
                </section>
            </div>
            <div className="container-sm my-5">
                <p className="title fs-1">Pizzas doces</p>
                <section className="d-flex flex-nowrap overflow-auto py-3">
                    {pizzasDoces.map((pizza) => (
                        <CardPizza background={pizza.background} name={pizza.name} price={pizza.price}/>
                    ))
                }
                </section>
            </div>
            <div className="container-sm my-5">
                <p className="title fs-1">Pizzas limitadas</p>
                <section className="d-flex flex-nowrap overflow-auto py-3">
                    {pizzasLimitadas.map((pizza) => (
                        <div className="d-flex flex-column card-pizza justify-content-between mx-3">
                            <img src={pizza.background} alt="" />
                            <span>{pizza.name}</span>
                            <div className='p-2 rounded-3 text-bg-primary d-flex flex-column align-items-center'>
                                <p>
                                    Disponível apenas no combo:
                                </p>
                                <p className='combo-title px-2'>
                                    Sabor Intergaláctico
                                </p>
                            </div>
                        </div>
                    ))
                }
                </section>
            </div>
            <div className="container-sm my-5">
                <p className="title fs-1">Combos</p>
                <section className="d-flex flex-column">

                    {combos.map((combo) => (
                        <CardCombo background={combo.background} name={combo.name} price={combo.price} content={combo.content}/>
                    ))}

                    <SaborIntergalactico></SaborIntergalactico>
                    <DoceAventuraEspacial></DoceAventuraEspacial>
                </section>
            </div>
        </>
    )
}

export default CarrocelPizzas
