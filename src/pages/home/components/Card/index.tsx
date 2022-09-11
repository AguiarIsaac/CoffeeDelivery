import { CardContent, CounterCard, Description, Tags, Title, BuyContent, Counter } from "./style"
import expresso from '../../../../assets/img/coffees/expresso.svg'
import {  ShoppingCart } from "phosphor-react"
import { useState } from "react"

export function Card() {

  const [quantity, setQuantity] = useState(0)

  function handleClickRemove() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function handleClickAdd() {
    setQuantity(quantity + 1)
  }
    return (
        <CardContent>
            <img src={expresso} alt="Café expresso" />
            <Tags>Tradicional</Tags>
            <Title>Expresso tradicional</Title>
            <Description>O tradicional café feito com água quente e grão moidos</Description>

            <BuyContent>
                <span>R$ <strong>9,90</strong></span>

                <CounterCard>
                    <Counter>
                      <button onClick={handleClickRemove}>-</button>
                      <p>{quantity}</p>
                      <button onClick={handleClickAdd}>+</button>
                    </Counter>
                  
                  <button id="Cart">
                    <ShoppingCart/>
                  </button>
                </CounterCard>

            </BuyContent>
        </CardContent>
    )
}