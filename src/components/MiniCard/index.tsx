import { Trash } from 'phosphor-react'
import cafe from '../../assets/img/coffees/americano.svg'
import { Actions, ButtonRemove, Content, Counter, Info, Price } from './style'

export function MiniCard() {
    return (
        <Content>
            <Info>
                <img src={cafe} alt="cafezinho" />
                <div className="details">
                    <p>Expresso Tradicional</p>
                    <Actions>
                        <Counter>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </Counter>

                        <div>
                            <ButtonRemove>
                                <Trash />
                                REMOVER
                            </ButtonRemove>
                        </div>
                    </Actions>
                </div>
            </Info>

            <Price>R$ 9,90</Price>
        </Content>
    )
}