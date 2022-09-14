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
  const [quantidade, setQuantidade] = useState(0)

  function handleQuantidade() {
    setQuantidade(quantidade + 1)
  }
  
  function handleRemoveQuantidade() {
    if(quantidade > 0 ) {
      setQuantidade(quantidade - 1)
    }
  }

  function carrinho() {
    const item = {
      name: name,
      value: value,
      quantity: quantidade
    }
    testeDefunction.AddToCart(item)
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
                <button onClick={handleRemoveQuantidade}>-</button>
                  <p>{quantidade}</p>
                <button onClick={handleQuantidade}>+</button>
              </Counter>
              
              <button id="Cart" onClick={carrinho}>
                <ShoppingCart/>
              </button>
            </CounterCard>
      </BuyContent>
    </CardContent>
  )
}