import '../../../styles/home/carrocelPizzas/index.css'
import CardPizza from './CardPizza'
import { pizzasSalgadas, pizzasDoces, pizzasLimitadas } from './Pizzas'


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
                        <CardPizza background={pizza.background} name={pizza.name} price={pizza.price.toString()}/>
                    ))
                }
                </section>
            </div>
            <div className="container-sm my-5">
                <p className="title fs-1">Pizzas limitadas</p>
                <section className="d-flex flex-nowrap overflow-auto py-3">
                    {pizzasLimitadas.map((pizza) => (
                        <CardPizza background={pizza.background} name={pizza.name} price={pizza.price.toString()}/>
                    ))
                }
                </section>
            </div>
        </>
    )
}

export default CarrocelPizzas