import '../../styles/cart/index.css'
import { useState, useEffect } from 'react';
import { initialPizzas } from '../home/carrocelPizzas/CardPizza';

function gerarCodigo() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    const codeLength = 6;

    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters[randomIndex];
    }

    return code;
}


export default function Cart(){

    const [pizzas, setPizzas] = useState(initialPizzas);
    
    let [totalValue, setTotalValue] = useState()
    const [paymentType, setPaymentType] = useState()
    const [troco, setTroco] = useState()
    const [valorTroco, setValorTroco] = useState()
    const [refri, setRefri] = useState()
    const [entrega, setEntrega] = useState()
    const [endereco, setEndereco] = useState()

    useEffect(()=>{
        if(paymentType !== 'dinheiro'){
            setTroco('nao')
        }
    }, [paymentType])

    const updateQuant = (index, oper) => {
        const newPizzas = [...pizzas];
        if(oper === '-'){
            newPizzas[index].quantidade -= 1;
            setPizzas(newPizzas);
            if (newPizzas[index].quantidade === 0) {
                newPizzas.splice(index, 1)
            }
        } else {
            newPizzas[index].quantidade += 1;
            setPizzas(newPizzas);
        }
    };

    useEffect(() => {
        let total = 0;
        pizzas.forEach(pizza => {
            total += pizza.price * pizza.quantidade;
        });
        
        if (refri) {
            total += 2; // Adiciona R$2,00 ao total se o checkbox estiver checado
        }
    
        setTotalValue(total.toFixed(2).toString().replace('.', ','));
    }, [pizzas, refri]);

    function enviarPedido(){
        let message = 'Pedido%0A'
        pizzas.forEach((pizza) => {
            message += `
%0A${pizza.quantidade}x - *${pizza.name}*     |    R$${pizza.price.replace('.', ',')}un.
`
        })

        message += `
%0A%0A%0AValor total do pedido: *R$${totalValue.replace('.', ',')}*
%0AForma de pagamento: *${paymentType}*
%0ATroco: *${troco === 'sim' ? valorTroco : 'não'}*
%0ACopo de refri: *${refri === false ? 'sim' : 'não'}*

%0A%0A%0ADados de entrega
%0A%0AÉ para entrega: *${entrega === true ? 'sim' : 'não'}*
%0AEndereço: *${entrega === true ? endereco : ''}*
%0ACódigo para entrega: *${gerarCodigo()}*
`
        
        window.location.assign(`https://api.whatsapp.com/send/?phone=5511950447865&text=${message}`)
    }

    return (
        <div className="container-sm">
            <p className="title fs-1">Carrinho</p>
            {pizzas.length > 0 ?
                (<>
                    <section className="d-flex flex-wrap mt-5 pizzasFav">
                        {pizzas.map((pizza, index) => (
                            <div className="pizzaFav d-flex my-3">
                                <img src={pizza.background} alt="" />
                                <div className="m-3">
                                    <p className="fs-3">{pizza.name}</p>
                                    <span className="fs-4 price">R${pizza.price.toString().replace('.', ',')}</span>
                                    <div className="d-flex">
                                        <i className="bi bi-dash-circle fs-1 title cursor-pointer" onClick={() => updateQuant(index, '-')}></i>
                                        <p className="my-auto mx-3 fs-4">{pizza.quantidade}</p>
                                        <i className="bi bi-plus-circle fs-1 title cursor-pointer" onClick={() => updateQuant(index, '+')}></i>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </section>
                    <form className="form-payment d-block">
                        <label className="d-flex input-check my-5">
                            <input
                                type="checkbox"
                                name="soda"
                                id="soda"
                                className="mx-2 form-check-input my-auto"
                                onChange={e => setRefri(e.target.checked)}
                            />
                            <span htmlFor='soda' className='fs-4 title'>Deseja adicionar um copo de refrigerante por apenas R$2,00?</span>
                        </label>
                        <select className="fs-5" onChange={e => {setPaymentType(e.target.value)}} required>
                            <option value="paymentType" key="payment">Selecione uma forma de pagamento:</option>
                            <option value="débito" key="">Débito</option>
                            <option value="crédito" key="">Crédito</option>
                            <option value="pix" key="">Pix</option>
                            <option value="dinheiro" key="">Dinheiro</option>
                        </select>
                        {paymentType === 'dinheiro' &&
                            <div className="title">
                                <p className="fs-5 my-2">Precisa de troco?</p>
                                <section className="gap-3 d-flex">
                                    <label className="d-flex align-items-center gap-2">
                                        <input
                                            type="radio"
                                            name="input"
                                            className="form-check-input"
                                            value='sim'
                                            onChange={e=>{
                                                setTroco(e.target.value)
                                            }}
                                        />
                                        <span htmlFor='input'>sim</span>
                                    </label>
                                    <label className="d-flex align-items-center gap-2">
                                        <input
                                            type="radio"
                                            name="input"
                                            className="form-check-input"
                                            value='nao'
                                            onChange={e=>{
                                                setTroco(e.target.value)
                                            }}
                                        />
                                        <span htmlFor='input'>não</span>
                                    </label>
                                </section>
                                {troco === 'sim' &&
                                    <label>
                                        <span>Troco para quanto:</span>
                                        <input
                                            type="number"
                                            min={parseFloat(totalValue.replace(',', '.'))}
                                            className="form-text-input"
                                            onChange={e => setValorTroco(`troco para R$${e.target.value.replace('.', ',')}`)}
                                        />
                                    </label>
                                }
                            </div>
                        }
                        <label className="d-flex input-check my-3">
                            <input
                                type="checkbox"
                                name="entrega"
                                id="entrega"
                                className="mx-2 form-check-input my-auto"
                                onChange={e => setEntrega(e.target.checked)}
                            />
                            <span htmlFor='entrega' className='fs-4 title'>Para entrega?</span>
                        </label>
                        {entrega === true &&
                            <label>
                                <span className="title">Endereço:</span>
                                <input
                                    type="text"
                                    className="form-text-input"
                                    onChange={e => setEndereco(`${e.target.value}`)}
                                />
                            </label>
                        }

                    </form>
                    <p className="title fs-2">TOTAL: R${totalValue}</p>
                    
                    <button className='endOrder' onClick={enviarPedido}>Finalizar pedido</button>
                </>) : <p>Sem pizzas no carrinho</p>
            }
        </div>
    )
}