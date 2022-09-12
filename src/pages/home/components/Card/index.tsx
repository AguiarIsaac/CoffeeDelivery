import { CardContent, CounterCard, Description, Tag, Tags, Title, BuyContent, Counter } from "./style"
import {  ShoppingCart } from "phosphor-react"

interface CardProps {
  name: string,
  description: string,
  avatar: string,
  tags: string[],
  value: number
}

export function Card({name, description, avatar, tags, value}: CardProps) {
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
                      <button>-</button>
                      <p>0</p>
                      <button>+</button>
                    </Counter>
                  
                  <button id="Cart">
                    <ShoppingCart/>
                  </button>
                </CounterCard>

            </BuyContent>
        </CardContent>
    )
}