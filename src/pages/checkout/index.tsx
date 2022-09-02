import { FormContainer, Frame1, Frame2 } from "./style";
import { MiniCard } from "../../components/MiniCard";
import { MapPinLine } from "phosphor-react";

export function Checkout() {
    return (
        <>
          <FormContainer>
            <div>
              <h4>Complete seu pedido</h4>
              <Frame1>
                <span><MapPinLine size={24}/> <p>Endereço de Entrega</p></span>
                <p>Informe o endereço onde deseja receber o pedido</p>
                
                <input type="text" placeholder="CEP" name="CEP" id="CEP" />
                <input type="text" placeholder="Rua" name="RUA" id="RUA" />
                <input type="text" placeholder="Número" name="NUM" id="NUM" />
                <input type="text" placeholder="Complemento" name="COMP" id="COMP"/>
                <input type="text" placeholder="Bairro" name="BAIRRO" id="BAIRRO" />
                <input type="text" placeholder="Cidade" name="CIDADE" id="CIDADE" />
                <input type="text" placeholder="UF" name="UF" id="UF" />
              </Frame1>

              <div>
                <span>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que desejar pagar</p>

                <div>
                  <span>CARTÃO DE CRÉDITO</span>
                  <span>CARTÃO DE DÉBITO</span>
                  <span>DINHEIRO</span>
                </div>
              </div>
            </div>

            <div>
              <h4>Cafés selecionados</h4>

              <div>
                <Frame2>
                  <MiniCard />
                  <MiniCard />
                </Frame2>
              </div>
            </div>
          </FormContainer>
        </>
    )
}