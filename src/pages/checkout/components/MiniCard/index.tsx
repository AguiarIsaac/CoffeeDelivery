import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { ShoppingContext } from '../../../../contexts/ShoppingContext'
import { Actions, ButtonRemove, Content, Counter, Info, Price } from './style'

interface CartItemProps {
    name: string,
    avatar: string,
    value: number,
    quantity: number
}

export function MiniCard({name, avatar, value, quantity}: CartItemProps) {

    const CartsItens = useContext(ShoppingContext)

    const [newQuantity, setNewQuantity] = useState(quantity)

    function SendNewQuantity() {
        const item = {
            name: name,
            avatar: avatar,
            value: value,
            quantity:newQuantity
        }
         CartsItens.ChangeQuantityCoffee(item)
    }

    function handleAddQuantity() {
        setNewQuantity( newQuantity + 1)
        SendNewQuantity()
    }

    function handleRemoveQuantity() {
        if(newQuantity > 0) {
            setNewQuantity(newQuantity - 1)
        }
        SendNewQuantity()
    }

    function handleRemoveItem() {
        const item = {
            name: name,
            avatar: avatar,
            value: value,
            quantity:newQuantity
        }
        
        CartsItens.RemoveCoffe(item)
    }

    return (
        <Content>
            <Info>
                <img src={avatar} alt="cafezinho" />
                <div className="details">
                    <p>{name}</p>
                    <Actions>
                        <Counter>
                            <button onClick={handleRemoveQuantity}>-</button>
                            <p>{newQuantity}</p>
                            <button onClick={handleAddQuantity}>+</button>
                        </Counter>

                        <div>
                            <ButtonRemove onClick={handleRemoveItem}>
                                <Trash />
                                REMOVER
                            </ButtonRemove>
                        </div>
                    </Actions>
                </div>
            </Info>
            <Price>R$ {value.toFixed(2)}</Price>
        </Content>
    )
}