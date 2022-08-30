import { BannerContainer, Benefits, CardContent, Cards, TextsContainer } from "./style";

import Cart from '../../assets/icons/Banner_Cart.svg'
import Timer from '../../assets/icons/Banner_Timer.svg'
import Box from '../../assets/icons/Banner_Box.svg'
import Coffee from '../../assets/icons/Banner_Coffee.svg'
import CoffeePage from '../../assets/img/Banner_CoffeeP.svg'
import { Card } from "./components/Card";

export function Home() {
    return (
      <>
        <BannerContainer>
          <div>
            <TextsContainer>
              <h2>Encontre o café perfeito para qualquer hora do dia</h2>
              <p>Com o Coffee Delivery você recebe café onde estiver, a qualquer hora</p>
            </TextsContainer>

            <Benefits>
              <p><img src={Cart}/>Compra simples e segura</p>
              <p><img src={Box}/>Embalagem mantém o café intacto</p>
              <p><img src={Timer}/>Entrega rápida e rastreada</p>
              <p><img src={Coffee}/>o café chega fresquinho até covê</p>
            </Benefits>
          </div>

          <img src={CoffeePage} alt="Copo de café e grãos" /> 
        </BannerContainer>

        <CardContent>
          <h3>Nossos Cafés</h3>
          
          <Cards>
            <Card />
          </Cards>
        </CardContent>
      </>
    )
}