import cafe from '../../assets/img/coffees/americano.svg'
import { Content } from './style'

export function MiniCard() {
    return (
        <Content>
            <div className="info">
                <img src={cafe} alt="cafezinho" />
                <div className="details">
                    <p>Expresso Tradicional</p>
                    <div className="actions">
                        <div>
                            <button>-</button>
                            <p>1</p>
                            <button>+</button>
                        </div>

                        <div>
                            <button>Remover</button>
                        </div>
                    </div>
                </div>
            </div>

            <p>R$ 9,90</p>
        </Content>
    )
}