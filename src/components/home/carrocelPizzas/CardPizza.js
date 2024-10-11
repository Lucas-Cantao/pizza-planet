export let initialPizzas = []

export let total = 0;
export function addToCart(pizza) {
    const pizzaExists = initialPizzas.some(item => item.name === pizza.name);

    if (!pizzaExists) {
        initialPizzas.push(pizza);
        document.getElementById('add').style.scale = 1;
        setTimeout(() => {
            document.getElementById('add').style.scale = 0;
        }, 2000);
    } else {
        document.getElementById('added').style.scale = 1;
        setTimeout(() => {
            document.getElementById('added').style.scale = 0;
        }, 1500);
    }
    initialPizzas.forEach(pizza => {
        total +=  pizza.price * pizza.quantidade;
    })
}


function CardPizza({ background, name, price }) {   
    
    
    return (
        <div className="d-flex flex-column card-pizza justify-content-between mx-3">
            <img src={background} alt="" />
            <span>{name}</span>
            <span>R${price},00</span>
            <button className="rounded-3" onClick={() => {addToCart({
                background: background,
                name: name,
                price: price,
                quantidade: 1
            })}}>
                Adicionar
                <i className="bi bi-cart"></i>
            </button>
        </div>
    )
}

export default CardPizza