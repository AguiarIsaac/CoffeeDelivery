import { Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { ShoppingContext } from '../../../../contexts/ShoppingContext'
import { Actions, ButtonRemove, Content, Counter, Info, Price } from './style'

interface CartItemProps {
    name: string,
    avatar: string,
    value: number,
    quantity: number,
    total: number,
    setTotal: (newState: number) => void
  }

export function MiniCard({name, avatar, value, quantity, setTotal, total}: CartItemProps) {
    const ShoppingCart = useContext(ShoppingContext)

    const [newQuantity, setNewQuantity] = useState(quantity)
    const [newValue, setNewValue] = useState(value)


    function SendNewQuantity() {
        const item = {
            name: name,
            avatar: avatar,
            value: value,
            quantity:newQuantity
        }
        ShoppingCart.ChangeQuantityCoffee(item)
    }

    function handleAddQuantity() {
        setNewQuantity( newQuantity + 1)
        setNewValue(newValue + value)
        setTotal(total + newValue)
        console.log(total)
        SendNewQuantity()
    }

    function handleRemoveQuantity() {
        if(newQuantity > 0) {
            setNewQuantity(newQuantity - 1)
            setNewValue(newValue - value)
            setTotal(total - newValue)
            console.log(total)
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
        <Price>R$ {newValue.toFixed(2)}</Price>
    </Content>
    )
}