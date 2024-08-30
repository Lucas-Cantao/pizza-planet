import '../../../styles/home/carrocelPizzas/index.css'
import CardPizza from './CardPizza'
import pizzas from './Pizzas'


function CarrocelPizzas(){
    return(
        <div className="container-sm my-5">
            <p className="title fs-1">Pizzas</p>
            <section className="d-flex flex-nowrap overflow-auto py-3">
                {pizzas.map((pizza) => (
                    <CardPizza background={pizza.background} name={pizza.name} price={pizza.price.toString()}/>
                ))
                }
            </section>
        </div>
    )
}

export default CarrocelPizzas