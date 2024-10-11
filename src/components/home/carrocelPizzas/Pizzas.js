import mussarelaBG from '../../../assets/mussarela.png'
import calabresaBG from '../../../assets/calabresa.png'
import chocolateMorangoBG from '../../../assets/chocolate-morango.png'
import chocolateUvaBG from '../../../assets/chocolate-uva.png'
import chocolatePrestigioBG from '../../../assets/chocolate-prestigio.png'
import calabresaCatupiryBG from '../../../assets/calabresa-catupiry.png'
import calabresaMussarelaBG from '../../../assets/calabresa-queijo.png'
import frangoCatupiryBG from '../../../assets/frango-catupiry.png'

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

const pizzas = [...pizzasSalgadas, ...pizzasDoces, ...pizzasLimitadas]

export { pizzasSalgadas, pizzasDoces, pizzasLimitadas, pizzas }