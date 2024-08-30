import calabresaBG from '../../../assets/pizza-calabresa.jpeg'
import mussarelaBG from '../../../assets/pizza-mussarela.jpg'
import portuguesaBG from '../../../assets/pizza-portuguesa.jpg'
import frangoCatupiryBG from '../../../assets/pizza-frango-catupiry.jpg'
import quatroQueijosBG from '../../../assets/pizza-quatro-queijos.jpg'
import peperoneBG from '../../../assets/pizza-peperone.jpg'
import supremeBG from '../../../assets/pizza-supreme.jpg'
import espanholaBG from '../../../assets/pizza-espanhola.jpg'
import margueritaBG from '../../../assets/pizza-marguerita.jpg'


const pizzas = [
    {
        background: calabresaBG,
        name: 'Calabresa',
        price: 39.99,
        ingredientes: [
            'Calabresa',
            'Cebola em rodelas',
            'Azeitonas',
            'Orégano'
        ],
        quantidade: 1
    },
    {
        background: mussarelaBG,
        name: 'Mussarela',
        price: 36.99,
        ingredientes: [
            'Mussarela',
            'Tomate em rodelas',
            'Orégano'
        ],
        quantidade: 1
    },
    {
        background: portuguesaBG,
        name: 'Portuguesa',
        price: 43.99,
        ingredientes: [
            'Mussarela',
            'Presunto',
            'Ovo cozido',
            'Tomate em rodela',
            'Azeitona',
            'Orégano'
        ],
        quantidade: 1
    },
    {
        background: frangoCatupiryBG,
        name: 'Frango com catupiry',
        price: 41.99,
        ingredientes: [
            'Frango',
            'Catupiry'
        ],
        quantidade: 1
    },
    {
        background: quatroQueijosBG,
        name: 'Quatro queijos',
        price: 39.99,
        ingredientes: [
            'Queijo mussarela',
            'Queijo gosgonzola',
            'Queijo prato',
            'Queijo cheddar',
            'Orégano',
            'Mangericão'
        ],
        quantidade: 1
    },
    {
        background: peperoneBG,
        name: 'Peperone',
        price: 36.99,
        ingredientes: [
            'Mussarela',
            'Peperone'
        ],
        quantidade: 1
    },
    {
        background: supremeBG,
        name: 'Supreme',
        price: 44.99,
        ingredientes: [
            'Peperone',
            'Calabresa',
            'Cebola em rodelas',
            'Pimentão verde fatiado',
            'Azeitona preta fatiada'
        ],
        quantidade: 1
    },
    {
        background: espanholaBG,
        name: 'Espanhola',
        price: 43.99,
        ingredientes: [
            'Mussarela',
            'Calabresa ralada',
            'Alho tostado',
            'Tomate em rodelas',
            'Azeitona',
            'Orégano'
        ],
        quantidade: 1
    },
    {
        background: margueritaBG,
        name: 'Marguerita',
        price: 42.99,
        ingredientes: [
            'Mussarela',
            'Manjericão',
            'Tomate em rodelas',
            'Azeitona',
            'Orégano'
        ],
        quantidade: 1
    }
]

export default pizzas