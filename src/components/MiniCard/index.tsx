import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Actions, ButtonRemove, Content, Counter, Info, Price } from './style'

interface CartItemProps {
    name: string,
    avatar: string,
    value: number,
    quantity: number
}

export function MiniCard({name, avatar, value, quantity}: CartItemProps) {

    return (
        <Content>
            <Info>
                <img src={avatar} alt="cafezinho" />
                <div className="details">
                    <p>{name}</p>
                    <Actions>
                        <Counter>
                            <button>-</button>
                            <p>{quantity}</p>
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
            <Price>R$ {value.toFixed(2)}</Price>
        </Content>
    )
}