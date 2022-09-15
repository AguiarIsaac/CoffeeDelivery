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
  const testeDefunction = useContext(ShoppingContext)
  const [quantity, setQuantity] = useState(0)

  function handleQuantity() {
    setQuantity(quantity + 1)
  }
  
  function handleRemoveQuantity() {
    if(quantity > 0 ) {
      setQuantity(quantity - 1)
    }
  }

  function InsertTocart() {
    const coffee = {
      name: name,
      avatar: avatar,
      value: value,
      quantity: quantity
    }
    testeDefunction.AddToCart(coffee)
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
        <span>R$ <strong>{value.toFixed(2)}</strong></span>
            <CounterCard>
              <Counter>
                <button onClick={handleRemoveQuantity}>-</button>
                  <p>{quantity}</p>
                <button onClick={handleQuantity}>+</button>
              </Counter>
              
              <button id="Cart" onClick={InsertTocart}>
                <ShoppingCart/>
              </button>
            </CounterCard>
      </BuyContent>
    </CardContent>
  )
}