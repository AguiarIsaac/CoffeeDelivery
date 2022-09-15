import { Enviar, FormContainer, Frame1, Frame2, Frame21, Frame22, Frame23, HeaderFrame1, InputGroup, PaymentMethods } from "./style";
import { MiniCard } from "../../components/MiniCard";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { ShoppingContext } from "../../contexts/ShoppingContext";

export function Checkout() {
  const ShoppingCart = useContext(ShoppingContext)
  
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
                  <input type="text" placeholder="UF" name="UF" id="UF" maxLength={2} />
                </div>
              </InputGroup>
            </Frame1>

            
            <PaymentMethods>
              <span className="titlePayment"><CurrencyDollar size={24}/>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que desejar pagar</p>

              <div>
                <input type="checkbox"  name="Credit" id="Credit" />
                <label htmlFor="Credit"><CreditCard size={24}/>CARTÃO DE CRÉDITO</label>

                <input type="checkbox" name="Debit" id="Debit" />
                <label htmlFor="Debit"><Bank size={24} />CARTÃO DE DÉBITO</label>
                
                <input type="checkbox" name="Money" id="Money" />
                <label htmlFor="Money"><Money size={24} />DINHEIRO</label>
                
              </div>

            </PaymentMethods>
          </div>
          
          <div>
            <h4>Cafés selecionados</h4>

            <div>
              <Frame2>
                <MiniCard />
                <MiniCard />

                <Frame21>
                  <p>Total de itens</p>
                  <p>R$ 29,90</p>
                </Frame21>

                <Frame22>
                  <p>Entrega</p>
                  <p>R$ 3,50</p>
                </Frame22>

                <Frame23>
                  <strong>Total</strong>
                  <strong>R$ 33,20</strong>
                </Frame23>

                <Enviar type="submit">Confirmar Pedido</Enviar>
              </Frame2>
            </div>
          </div>
        </FormContainer>
      </>
  )
}