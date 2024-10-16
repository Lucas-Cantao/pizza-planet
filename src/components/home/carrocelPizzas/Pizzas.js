import mussarelaBG from '../../../assets/mussarela.png'
import calabresaBG from '../../../assets/calabresa.png'


import chocolateMorangoBG from '../../../assets/chocolate-morango.png'
import chocolateUvaBG from '../../../assets/chocolate-uva.png'
import chocolatePrestigioBG from '../../../assets/chocolate-prestigio.png'


import calabresaCatupiryBG from '../../../assets/calabresa-catupiry.png'
import calabresaMussarelaBG from '../../../assets/calabresa-queijo.png'
import frangoCatupiryBG from '../../../assets/frango-catupiry.png'


import senhoresCabecaDeBatata from '../../../assets/senhores-cabecas-de-batata.png'
import amigoEstouAqui from '../../../assets/amigo-estou-aqui.png'


const pizzasSalgadas = [
    
    {
        background: mussarelaBG,
        name: 'Buzz - Mussarela',
        price: 8.00,
        ingredientes: [
            'Mussarela',
            'Tomate em rodelas',
            'Cebola',
            'Azeitona'
        ],
        quantidade: 1
    },
    {
        background: calabresaBG,
        name: 'Woody - Calabresa',
        price: 8.00,
        ingredientes: [
            'Calabresa',
            'Cebola em rodelas',
            'Azeitonas',
            'Orégano'
        ],
        quantidade: 1
    }    
]

const pizzasDoces = [
    {
        background: chocolateMorangoBG,
        name: 'Betty - Chocolate com morango',
        price: 9.00,
        ingredientes: [
            'Chocolate',
            'Morango'
        ],
        quantidade: 1
    },
    {
        background: chocolateUvaBG,
        name: 'Rex - Chocolate com uva',
        price: 9.00,
        ingredientes: [
            'Chocolate',
            'uva'
        ],
        quantidade: 1
    },
    {
        background: chocolatePrestigioBG,
        name: 'Ao infinito e além - Chocolate com prestígio',
        price: 9.00,
        ingredientes: [
            'Chocolate',
            'Prestígio'
        ],
        quantidade: 1
    }
]

const pizzasLimitadas = [
    
    {
        background: frangoCatupiryBG,
        name: 'Jessie - Frango com catupiry',
        price: 8.00,
        ingredientes: [
            'Frango',
            'Catupiry'
        ],
        quantidade: 1
    },
    {
        background: calabresaMussarelaBG,
        name: 'Forky - Calabresa com mussarela',
        price: 8.00,
        ingredientes: [
            'Calabresa',
            'Mussarela',
            'Cebola em rodelas',
            'Azeitonas'
        ],
        quantidade: 1
    },
    {
        background: calabresaCatupiryBG,
        name: 'Lotso - Calabresa com catupiry',
        price: 8.00,
        ingredientes: [
            'Calabresa',
            'Catupiry'
        ],
        quantidade: 1
    },
    
]

const combos = [
    {
        background: senhoresCabecaDeBatata,
        name: 'Senhores cabeças de batata',
        content: 'O Combo Senhores Cabeça de Batata oferece duas deliciosas mini-pizzas para agradar a todos os gostos: uma mini-pizza Betty, coberta com chocolate e morango, e uma mini-pizza Buzz, com o sabor clássico de mussarela. O combo inclui ainda um suco ou refrigerante pequeno à escolha do cliente, perfeito para acompanhar essas opções saborosas.',
        price: 16
    },
    {
        background: amigoEstouAqui,
        name: 'Amigo estou aqui',
        content: 'O Combo Amigo Estou Aqui traz uma deliciosa mini-pizza Buzz, feita de mussarela, e uma mini-pizza Woody, preparada com saborosa calabresa. Para completar, o combo inclui uma bebida à sua escolha, seja um suco ou um refrigerante pequeno. Ideal para quem quer aproveitar sabores irresistíveis em um lanche prático!',
        price: 16
    }
]

const pizzas = [...pizzasSalgadas, ...pizzasDoces, ...pizzasLimitadas]

export { pizzasSalgadas, pizzasDoces, pizzasLimitadas, pizzas, combos }