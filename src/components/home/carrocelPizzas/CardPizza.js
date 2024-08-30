export let initialPizzas = []

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
}
function CardPizza({ background, name, price }) {   
    



    return (
        <div className="d-flex flex-column card-pizza justify-content-between mx-3">
            <img src={background} alt="" />
            <p>{name}</p>
            <span>R${price.toString().replace('.', ',')}</span>
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