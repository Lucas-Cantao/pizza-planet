import { useEffect, useState } from 'react'
import '../../styles/endOrder/index.css'
import { initialPizzas } from '../home/carrocelPizzas/CardPizza';
import { totalExport } from '../cart';

function gerarCodigo(tamanho) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let codigo = '';
  
  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres[indiceAleatorio];
  }

  return codigo;
}

export default function EndOrder() {

    const [paymentType, setPaymentType] = useState('')
    const [troco, setTroco] = useState('nao')
    const [valorTroco, setValorTroco] = useState()
    // const [entrega, setEntrega] = useState()
    // const [rua, setRua] = useState()
    // const [numero, setNumero] = useState()
    // const [cidade, setCidade] = useState()
    // const [estado, setEstado] = useState()
    const [total,  setTotal] = useState(totalExport)



    // let endereco = `Rua: ${rua}, ${numero}, ${cidade} - ${estado}`


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
        setTotal(newTotal)
    }, [total])

    function enviarPedido(e){
        e.preventDefault()
        const codigo = gerarCodigo(6)
        let message = `🧾Pedido: ${codigo}%0A--------------------%0A`
        initialPizzas.forEach((pizza) => {
            message += `
%0A------🍕${pizza.quantidade}x - *${pizza.name}* ${pizza.config === '' ? '' : (' - ' + pizza.config)}     |    R$${pizza.price},00 - un.
`
        })

        message += `
%0A%0A%0A💰Valor total do pedido: *R$${total},00*
%0A💳💵💠Forma de pagamento: *${paymentType}*
%0A🪙Troco: *${troco === 'sim' ? valorTroco : 'não'}*
%0A
%0A
%0A⚠⚠⚠Caso essa mensagem seja editada seu pedido será cancelado automaticamente, então apenas envie e aguarde o preparo. Gratos.⚠⚠⚠
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
                    {/* <label>
                        <input type="radio" id="debito" name="paymentType" value="debito" onChange={e => {setPaymentType(e.target.value)}}/>
                        <span htmlFor='paymentType'>Débito</span>
                    </label>
                    <label>
                        <input type="radio" id="credito" name="paymentType" value="credito" onChange={e => {setPaymentType(e.target.value)}}/>
                        <span htmlFor='paymentType'>Crédito</span>
                    </label> */}
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
                <p className='m-0 mt-3'>Por enquanto, não trabalhamos com delivery. Portanto, segue o endereço para retirada:</p>
                <p className='m-0 mb-3'>R. João Píres de Camargo, 207 - Jardim Mirna, Taboão da Serra - SP, 06790-240</p>
                <iframe
                    title="Projeto Uirapuru, Taboão da Serra"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8431215381434!2d-46.7847261246793!3d-23.60995856337949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5759c9615f57%3A0xa21af1e7c22f67a0!2sProjeto%20Uirapuru!5e0!3m2!1spt-BR!2sbr!4v1729034123611!5m2!1spt-BR!2sbr"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
                <p className='my-5 fs-5'>Total: R${total},00</p>
                {paymentType !== '' &&
                    <button className='endOrder-link' onClick={enviarPedido}>Finalizar pedido</button>
                }

            </form>
        </div>
    )
}
