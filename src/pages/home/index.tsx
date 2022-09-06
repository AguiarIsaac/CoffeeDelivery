import { BannerContainer, Benefits, Content, Cards, TextsContainer } from "./style";

import CoffeePage from '../../assets/img/Banner_CoffeeP.svg'
import { Card } from "./components/Card";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

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
              <p id="Cart"><ShoppingCart/> Compra simples e segura</p>
              <p id="Package"><Package/> Embalagem mantém o café intacto</p>
              <p id="Timer"><Timer/> Entrega rápida e rastreada</p>
              <p id="Coffee"><Coffee/>o café chega fresquinho até covê</p>
            </Benefits>
          </div>

          <img src={CoffeePage} alt="Copo de café e grãos" /> 
        </BannerContainer>

        <Content>
          <h3>Nossos Cafés</h3>
          
          <Cards>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Cards>
        </Content>
      </>
    )
}