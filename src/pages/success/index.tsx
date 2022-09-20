import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Title, ContentInfo, OrderInfo, Infos } from "./style";
import img from  '../../assets/img/Illustration.svg'
import { useContext } from "react";
import { ShoppingContext } from "../../contexts/ShoppingContext";

export function Success() {

  const ShoppingCart = useContext(ShoppingContext)
  return (
        <>
          <Title>
            <h2>Uhu! Pedido confirmado</h2>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </Title>

          <ContentInfo>
            <OrderInfo>
              <Infos>
                <MapPin id="Map" />
                <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong><br/>Farrapos - Porto Alegre, RS</p>
              </Infos>

              <Infos>
                <Timer id="Timer"/>
                <p>Previsão de entrega<br/><strong>20 min - 30 min</strong></p>
              </Infos>

              <Infos>
                <CurrencyDollar id="Dolar"/>
                <p>Pagamento na entrega<br/><strong>Cartão de crédito</strong></p>
              </Infos>
            </OrderInfo>

            <img src={img} alt="Entregador de cafés em uma moto" />
          </ContentInfo>
        </>
    )
}