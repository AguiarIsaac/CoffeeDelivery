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
    const ShoppingCart = useContext(ShoppingContext)

    const [newQuantity, setNewQuantity] = useState(quantity)
    const [newValue, setNewValue] = useState(value * quantity)


    function SendNewQuantity(quantity: number) {
        const item = {
            name: name,
            avatar: avatar,
            value: value,
            quantity:quantity
        }
        ShoppingCart.ChangeQuantityCoffee(item)
    }

    function handleAddQuantity() {

        const addedQuantity = newQuantity + 1

        setNewQuantity(addedQuantity)
        setNewValue(newValue + value)
        SendNewQuantity(addedQuantity)
    }

    function handleRemoveQuantity() {
        if(newQuantity > 0) {
            const addedQuantity = newQuantity - 1
            setNewQuantity(addedQuantity)
            setNewValue(newValue - value)

            SendNewQuantity(addedQuantity)
        }
    }

    function handleRemoveItem() {
        const item = {
            name: name,
            avatar: avatar,
            value: value,
            quantity:newQuantity
        }
        
        ShoppingCart.RemoveCoffe(item)
    }

    return (
    <Content>
        <Info>
            <img src={avatar} alt="cafezinho" />
            <div className="details">
                <p>{name}</p>
                <Actions>
                    <Counter>
                        <button type='button' onClick={handleRemoveQuantity}>-</button>
                        <p>{newQuantity}</p>
                        <button type='button' onClick={handleAddQuantity}>+</button>
                    </Counter>

                    <div>
                        <ButtonRemove type='button' onClick={handleRemoveItem}>
                            <Trash />
                            REMOVER
                        </ButtonRemove>
                    </div>
                </Actions>
            </div>
        </Info>
        <Price>R$ {newValue.toFixed(2)}</Price>
    </Content>
    )
}