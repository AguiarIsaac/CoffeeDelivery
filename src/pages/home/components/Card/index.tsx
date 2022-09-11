import { CardContent, CounterCard, Description, Tags, Title, BuyContent, Counter } from "./style"
import expresso from '../../../../assets/img/coffees/expresso.svg'
import {  ShoppingCart } from "phosphor-react"


export function Card() {
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