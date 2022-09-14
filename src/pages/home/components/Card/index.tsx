import { CardContent, CounterCard, Description, Tag, Tags, Title, BuyContent, Counter } from "./style"
import {  ShoppingCart } from "phosphor-react"
import { useContext, useState } from "react"
import { ShoppingContext } from "../../../../contexts/ShoppingContext"

interface CardProps {
  name: string,
  description: string,
  avatar: string,
  tags: string[],
  value: number,
}

export function Card({name, description, avatar, tags, value}: CardProps) {

  const { AddToCart } = useContext(ShoppingContext)

  const [quantity, setQuantity] = useState(0)

  function handleAddQuantity() {
    setQuantity(quantity + 1)
  }

  function handleRemoveQuantity() {
    if(quantity > 0 ) {
      setQuantity(quantity - 1)
    }
  }

  function ItemCart() {
    const item = {
      name: name,
      value: value,
      quantity: quantity
    }
    AddToCart(item)
  }

  return (
    <CardContent>
      <img src={avatar} alt="Café expresso" />
        
      <Tags>
        {tags.map(item => {
          return (
            <Tag key={item}>{item}</Tag>
            )
          })
        }
      </Tags>

      <Title>{name}</Title>
      <Description>{description}</Description>

      <BuyContent>
        <span>R$ <strong>{value}</strong></span>
            <CounterCard>
              <Counter>
                <button onClick={handleRemoveQuantity}>-</button>
                  <p>{quantity}</p>
                <button onClick={handleAddQuantity}>+</button>
              </Counter>
              
              <button id="Cart" onClick={ItemCart}>
                <ShoppingCart/>
              </button>
            </CounterCard>
      </BuyContent>
    </CardContent>
  )
}