import { FormContainer, Frame1, Frame2, HeaderFrame1, InputGroup, PaymentMethods } from "./style";
import { MiniCard } from "../../components/MiniCard";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

export function Checkout() {
    return (
        <>
          <FormContainer>
            <div>
              <h4>Complete seu pedido</h4>
              <Frame1>

                <HeaderFrame1>
                  <MapPinLine size={24}/>
                  <div>
                    <p>Endereço de Entrega</p>
                    <p>Informe o endereço onde deseja receber o pedido</p>
                  </div>
                </HeaderFrame1>
                
                <InputGroup>
                  <input type="text" placeholder="CEP" name="CEP" id="CEP" />
                  <input type="text" placeholder="Rua" name="RUA" id="RUA" />

                  <div>
                    <input type="text" placeholder="Número" name="NUM" id="NUM" />
                    <input type="text" placeholder="Complemento" name="COMP" id="COMP"/>  
                  </div>

                  <div>
                    <input type="text" placeholder="Bairro" name="BAIRRO" id="BAIRRO" />
                    <input type="text" placeholder="Cidade" name="CIDADE" id="CIDADE" />
                    <input type="text" placeholder="UF" name="UF" id="UF" />
                  </div>
                </InputGroup>
              </Frame1>

              
              <PaymentMethods>
                <span className="titlePayment"><CurrencyDollar size={24}/>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que desejar pagar</p>

                <div>
                  <span><CreditCard size={24}/>CARTÃO DE CRÉDITO</span>
                  <span><Bank size={24} />CARTÃO DE DÉBITO</span>
                  <span><Money size={24} />DINHEIRO</span>
                </div>

              </PaymentMethods>
            </div>
            
            <div>
              <h4>Cafés selecionados</h4>

              <div>
                <Frame2>
                  <MiniCard />
                  <MiniCard />

                  <div>
                    <p>Total de itens</p>
                    <p>R$ 29,90</p>
                  </div>

                  <div>
                    <p>Entrega</p>
                    <p>R$ 3,50</p>
                  </div>

                  <div>
                    <strong>Total</strong>
                    <strong>R$ 33,20</strong>
                  </div>

                  <button type="submit">Confirmar Pedido</button>
                </Frame2>
              </div>
            </div>
          </FormContainer>
        </>
    )
}