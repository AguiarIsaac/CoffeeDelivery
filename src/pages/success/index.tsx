import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Title, ContentInfo, OrderInfo, Infos } from "./style";
import img from  '../../assets/img/Illustration.svg'
import { useContext } from "react";
import { ShoppingContext } from "../../contexts/ShoppingContext";

export function Success() {

  const FormInfos = useContext(ShoppingContext)

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
                <p>Entrega em <strong>{FormInfos.form?.address}, {FormInfos.form?.number}</strong><br/>{FormInfos.form?.city} - {FormInfos.form?.uf}</p>
              </Infos>

              <Infos>
                <Timer id="Timer"/>
                <p>Previsão de entrega<br/><strong>20 min - 30 min</strong></p>
              </Infos>

              <Infos>
                <CurrencyDollar id="Dolar"/>
                <p>Pagamento na entrega<br/><strong>{FormInfos.form?.payment}</strong></p>
              </Infos>
            </OrderInfo>

            <img src={img} alt="Entregador de cafés em uma moto" />
          </ContentInfo>
        </>
    )
}