import '../../../styles/home/cardsMaiores/index.css'

export default function CardsMaiores(){
    return (
        <div className="container-sm my-1 d-md-flex d-sm-block gap-5 justify-content-evenly">
            <section className="w-50">
                <p className="fs-1 title">Promoções</p>
                <div className="promocoes d-flex align-items-end">
                    <p className="text-center">Com mais R$2,00 no final da compra você leva um copo de refrigerante!</p>
                </div>
            </section>
            <section className="w-50">
                <p className="fs-1 title">Popular</p>
                <div className="popular d-flex align-items-end">
                    <p className="ms-5">Mini pizzas</p>
                </div>
            </section>
        </div>
    )
}