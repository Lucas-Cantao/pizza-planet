import { useEffect, useState } from 'react'
import '../../styles/endOrder/index.css'
import { initialPizzas } from '../home/carrocelPizzas/CardPizza';
import { totalExport } from '../cart';


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


export default function EndOrder() {

    const [paymentType, setPaymentType] = useState('')
    const [troco, setTroco] = useState('nao')
    const [valorTroco, setValorTroco] = useState()
    const [entrega, setEntrega] = useState()
    const [rua, setRua] = useState()
    const [numero, setNumero] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()
    const [refri,  setRefri] = useState()
    const [total,  setTotal] = useState(totalExport)



    let endereco = `Rua: ${rua}, ${numero}, ${cidade} - ${estado}`


    useEffect(()=>{
        if(paymentType !== 'dinheiro'){
            setTroco('nao')
        }
    }, [paymentType])

    useEffect(()=>{
        let newTotal = 0;
        initialPizzas.forEach(pizza => {
            newTotal +=  pizza.price * pizza.quantidade
        })
        if(refri){
            newTotal += 2
        }
        setTotal(newTotal)
    }, [refri])

    function enviarPedido(e){
        e.preventDefault()
        let message = 'Pedido%0A'
        initialPizzas.forEach((pizza) => {
            message += `
%0A${pizza.quantidade}x - *${pizza.name}*     |    R$${pizza.price.replace('.', ',')}un.
`
        })

        message += `
%0A%0A%0AValor total do pedido: *R$${parseFloat(total).toFixed(2).toString().replace('.', ',')}*
%0AForma de pagamento: *${paymentType}*
%0ATroco: *${troco === 'sim' ? valorTroco : 'não'}*
%0ARefrigerante: *${refri === true ? 'sim' : 'não'}*

%0A%0A%0ADados de entrega
%0A%0AÉ para entrega: *${entrega === true ? ('sim, Endereço de entrega: ' + endereco) : 'não, para retirada'}*
%0ACódigo para entrega: *${gerarCodigo()}*
`
        
        window.location.assign(`https://api.whatsapp.com/send/?phone=5511919184905&text=${message}`)
}




    return (
        <div className='container-sm div-form-payment'>
            <h1 className='title'>Finalizar pedido</h1>
            <p className='fs-3 my-4'>Precisamos que preencha algumas informações que serão passadas para nossos agentes:</p>
            <form className="form-payment mx-auto">
                <p className='fs-1 mb-4'>Informações para envio do pedido:</p>
                <p className='fs-5 m-0'>Qual será a forma de pagamento?</p>
                <section className='inputsRadio'>
                    <label>
                        <input type="radio" id="dinheiro" name="paymentType" value="dinheiro" onChange={e => {setPaymentType(e.target.value)}}/>
                        <span htmlFor='paymentType'>Dinheiro</span>
                    </label>
                    <label>
                        <input type="radio" id="pix" name="paymentType" value="pix" onChange={e => {setPaymentType(e.target.value)}}/>
                        <span htmlFor='paymentType'>Pix</span>
                    </label>
                    <label>
                        <input type="radio" id="debito" name="paymentType" value="debito" onChange={e => {setPaymentType(e.target.value)}}/>
                        <span htmlFor='paymentType'>Débito</span>
                    </label>
                    <label>
                        <input type="radio" id="credito" name="paymentType" value="credito" onChange={e => {setPaymentType(e.target.value)}}/>
                        <span htmlFor='paymentType'>Crédito</span>
                    </label>
                </section>
                {paymentType === 'dinheiro' &&
                    <>
                        <p className="fs-5 mt-3 m-0">Precisa de troco?</p>
                        <section className='inputsRadio d-flex'>
                            <label>
                                <input
                                    type="radio"
                                    name="inputTroco"
                                    value='sim'
                                    onChange={e=>{
                                        setTroco(e.target.value)
                                    }}
                                />
                                <span htmlFor='inputTroco'>sim</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="inputTroco"
                                    value='nao'
                                    onChange={e=>{
                                        setTroco(e.target.value)
                                    }}
                                />
                                <span htmlFor='inputTroco'>não</span>
                            </label>
                        </section>
                        {troco === 'sim' &&
                            <>
                                <p className='fs-5 mt-3 m-0'>Troco para quanto?</p>
                                <input
                                    type="number"
                                    min={parseFloat(total)}
                                    max={999}
                                    onChange={e => setValorTroco(`troco para R$${e.target.value}`)}
                                />
                            </>
                        }
                    </>
                }
                {/* <label className="mt-3">
                    <input
                        type="checkbox"
                        name="entrega"
                        id="entrega"
                        onChange={e => setEntrega(e.target.checked)}
                    />
                    <span htmlFor='entrega' className='fs-5'>Para entrega?</span>
                </label>
                {entrega === true ? (
                    <>
                        <p className='mt-3 m-0 fs-5'>Endereço:</p>
                        <section className='address'>
                            <label className='d-flex flex-row'>
                                <div className='d-flex flex-column'>
                                    <span className='fs-5 m-0'>Rua</span>
                                    <input
                                        type="text"
                                        className='w-100'
                                        onChange={e => setRua(`${e.target.value}`)}
                                    />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span className='fs-5 m-0'>Número</span>
                                    <input
                                        type="number"
                                        className='w-100'
                                        onChange={e => setNumero(`${e.target.value}`)}
                                    />
                                </div>
                            </label>
                            <label className='d-flex flex-row'>
                                <div className='d-flex flex-column'>
                                    <span className='fs-5 m-0'>Cidade</span>
                                    <input
                                        type="text"
                                        className='w-100'
                                        onChange={e => setCidade(`${e.target.value}`)}
                                    />
                                </div>
                                <div className='d-flex flex-column'>
                                    <span className='fs-5 m-0'>Estado</span>
                                    <input
                                        type="text"
                                        className='w-100'
                                        onChange={e => setEstado(`${e.target.value}`)}
                                    />
                                </div>
                            </label>
                        </section>
                    </>
                ) : (
                    <>
                        <p>Endereço para retirada: Av. Paulista, 100 - São Paulo, SP</p>
                        <iframe
                            title="Google Maps - Av. Paulista, São Paulo"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197490458261!2d-46.65906922468111!3d-23.561349561591737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1728003511469!5m2!1spt-BR!2sbr"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </>

                )} */}
                <p>Por enquanto, não trabalhamos com delivery. Portanto, segue o endereço para retirada:</p>
                <p>Endereço para retirada: Av. Paulista, 100 - São Paulo, SP</p>
                <iframe
                    title="Google Maps - Av. Paulista, São Paulo"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197490458261!2d-46.65906922468111!3d-23.561349561591737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1728003511469!5m2!1spt-BR!2sbr"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <label className="d-flex input-check my-5">
                        <input
                            type="checkbox"
                            name="soda"
                            id="soda"
                            className="mx-2 form-check-input my-auto"
                            onChange={e => setRefri(e.target.checked)}
                        />
                        <span htmlFor='soda'>Deseja adicionar um copo de refrigerante por apenas R$2,00?</span>
                </label>
                <p>Total: R${total},00</p>
                {paymentType !== '' &&
                    <button className='endOrder-link' onClick={enviarPedido}>Finalizar pedido</button>
                }

            </form>
        </div>
    )
}