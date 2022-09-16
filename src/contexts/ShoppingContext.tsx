import { createContext, ReactNode, useEffect, useState } from 'react';
import expressoT from '../assets/img/coffees/expresso.svg'
import expressoA from '../assets/img/coffees/americano.svg'
import cremoso from '../assets/img/coffees/expresso_cremoso.svg'
import gelado from '../assets/img/coffees/cafe_gelado.svg'
import cafeL from '../assets/img/coffees/cafe_cleite.svg'
import latte from '../assets/img/coffees/latte.svg'
import capuccino from '../assets/img/coffees/capuccino.svg'
import macchiato from '../assets/img/coffees/macchiato.svg'
import mocaccino from '../assets/img/coffees/mochaccino.svg'
import choco from '../assets/img/coffees/chocolate_quente.svg'
import cubano from '../assets/img/coffees/cubano.svg'
import havaiano from '../assets/img/coffees/havaiano.svg'
import arabe from '../assets/img/coffees/arabe.svg'
import irlandes from '../assets/img/coffees/irlandes.svg'
import { ShoppingCart } from 'phosphor-react';

interface ContextProps {
    children: ReactNode
}

interface ShoppingContextProps {
    CoffeList: {
        name: string,
        description: string,
        avatar: string,
        tags: string[],
        value: number
    }[],
    AddToCart: (newState: CartItemProps) => void,
    shoppingCart: CartItemProps[],
    ChangeQuantityCoffee: (newState: CartItemProps) => void,
    RemoveCoffe: (newState: CartItemProps) => void
}

interface CartItemProps {
    name: string,
    avatar: string,
    value: number,
    quantity: number
}

const InitialValue = {
    CoffeList: [
        {
          name: 'Expresso Tradicional',
          description: 'O tradicional café feito com água quente e grãos moídos',
          avatar: 'imagem',
          tags: ['Tradicional'],
          value: 6.50,
        },
    ],
    AddToCart: () => {},
    shoppingCart: [],
    ChangeQuantityCoffee: () => {},
    RemoveCoffe: () => {}
}

export const ShoppingContext = createContext<ShoppingContextProps>(InitialValue)

export function ShoppingContextProvider ({children}: ContextProps) {
    const [shoppingCart, setShoppingCart] = useState<CartItemProps[]>([])
    
    const CoffeList = [
        {
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        avatar: expressoT,
        tags: ['Tradicional'],
        value: 6.50,
        },
        {
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        avatar: expressoA,
        tags: ['Tradicional'],
        value: 7.00,
        },
        {
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        avatar: cremoso,
        tags: ['Tracidional'],
        value: 8.90,
        },
        {
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        avatar: gelado,
        tags: ['Tradicional', 'Gelado'],
        value: 4.50,
        },
        {
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        avatar: cafeL,
        tags: ['Tradicional', 'Com leite'],
        value: 7.50,
        },
        {
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        avatar: latte,
        tags: ['Tradicional', 'Com leite'],
        value: 8.00,
        },
        {
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        avatar: capuccino,
        tags: ['Tradicional', 'Com leite'],
        value: 8.50,
        },
        {
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        avatar: macchiato,
        tags: ['Tradicional', 'Com leite'],
        value: 8.90,
        },
        {
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        avatar: mocaccino,
        tags: ['Tradicional', 'Com Leite'],
        value: 9.00,
        },
        {
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        avatar: choco,
        tags: ['Especial', 'Com Leite'],
        value: 9.90,
        },
        {
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        avatar:cubano,
        tags: ['Especial', 'Alcoólico', 'Gelado'],
        value: 9.90,
        },
        {
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        avatar: havaiano,
        tags: ['Especial'],
        value: 9.90,
        },
        {
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        avatar: arabe,
        tags: ['Especial'],
        value: 9.90,
        },
        {
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        avatar: irlandes,
        tags: ['Especial', 'Alcoólico'],
        value: 9.90,
        },
    ]

    useEffect(() => {
        const LocalStorage = localStorage.getItem('@Coffe-Delivery: shopping-cart-1.0.0')
        if(!LocalStorage){return}
        
        const convert = JSON.parse(LocalStorage)

        if(shoppingCart.length === 0 && convert) {
            setShoppingCart(convert)
        }
    },[])

    useEffect(() => {
        if(shoppingCart.length > 0) {
            const stateJSON = JSON.stringify(shoppingCart)
            localStorage.setItem('@Coffe-Delivery: shopping-cart-1.0.0', stateJSON)
        }

        console.log(shoppingCart)
    }, [shoppingCart])

    function AddToCart(coffeSelected: CartItemProps) {
        
        if(coffeSelected.quantity === 0) {
            window.alert('Adicione uma Quantidade ao seu pedido!')
        } else {
            const duplicate = shoppingCart.find(item => item.name == coffeSelected.name)
            
            if (duplicate) {
                window.alert('Item já adicionado ao carrinho!')
            } else {
                setShoppingCart([...shoppingCart, coffeSelected])
            }
        }
    }

    function ChangeQuantityCoffee(coffeSelected: CartItemProps) {
        
        const newList = shoppingCart

        for(let c = 0; c < newList.length; c++) {
            if(newList[c].name == coffeSelected.name) {
                newList[c].quantity = coffeSelected.quantity
            }
        }

        setShoppingCart(newList)
        
    }

    function RemoveCoffe(coffeSelected: CartItemProps) {
        const NewList = shoppingCart.filter(coffee => coffee.name != coffeSelected.name)

        setShoppingCart(NewList)
    }

    return (
        <ShoppingContext.Provider value={{CoffeList, AddToCart, shoppingCart, ChangeQuantityCoffee, RemoveCoffe}}>
            {children}
        </ShoppingContext.Provider>
    )
}