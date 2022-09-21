import { Enviar, FormContainer, Frame1, Frame2, Frame21, Frame22, Frame23, HeaderFrame1, InputGroup, PaymentMethods } from "./style";

import { MiniCard } from "./components/MiniCard";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "phosphor-react";
import { ChangeEvent, useContext} from "react";
import { ShoppingContext } from "../../contexts/ShoppingContext";
import { useNavigate } from "react-router-dom";


export function Checkout() {
  const ShoppingCart = useContext(ShoppingContext)
  
  const navigate = useNavigate()
  const frete = 3.50
  const TotalItens = ShoppingCart.ValueTotal
  const Total = TotalItens + frete

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    function PaymentMethod() {
      const CheckBox = event.target.checkbox

      for(let c = 0; c < CheckBox.length; c++) {
        if( CheckBox[c].checked == true) {
          return CheckBox[c].id
        }
      }


    }

    const inputs = {
      cep: event.target.CEP.value,
      address: event.target.RUA.value,
      number: event.target.NUM.value,
      complement: event.target.COMP.value,
      district: event.target.BAIRRO.value,
      city: event.target.CIDADE.value,
      uf: event.target.UF.value,
      payment: PaymentMethod()
    }

    ShoppingCart.SaveFormData(inputs)

    navigate('/success')
  }

  return (
      <>
        <FormContainer onSubmit={handleSubmit}>
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
                <input type="text" placeholder="CEP" name="CEP" id="CEP" required/>
                <input type="text" placeholder="Rua" name="RUA" id="RUA" required/>

                <div>
                  <input type="text" placeholder="Número" name="NUM" id="NUM" required/>
                  <input type="text" placeholder="Complemento" name="COMP" id="COMP" required/>  
                </div>

                <div>
                  <input type="text" placeholder="Bairro" name="BAIRRO" id="BAIRRO" required/>
                  <input type="text" placeholder="Cidade" name="CIDADE" id="CIDADE" required/>
                  <input type="text" placeholder="UF" name="UF" id="UF" maxLength={2} required/>
                </div>
              </InputGroup>
            </Frame1>

            
            <PaymentMethods>
              <span className="titlePayment"><CurrencyDollar size={24}/>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que desejar pagar</p>

              <div>
                <input type="checkbox"  name="checkbox" id="Credito" />
                <label htmlFor="Credito"><CreditCard size={24}/>CARTÃO DE CRÉDITO</label>

                <input type="checkbox" name="checkbox" id="Debito" />
                <label htmlFor="Debito"><Bank size={24} />CARTÃO DE DÉBITO</label>
                
                <input type="checkbox" name="checkbox" id="Dinheiro" />
                <label htmlFor="Dinheiro"><Money size={24} />DINHEIRO</label>
                
              </div>

            </PaymentMethods>
          </div>
          
          <div>
            <h4>Cafés selecionados</h4>

            <div>
              <Frame2>
                {ShoppingCart.shoppingCart.map(item => 
                  { return <MiniCard 
                    name={item.name} 
                    avatar={item.avatar} 
                    quantity={item.quantity} 
                    value={item.value}
                    key={item.name}
                    />})}
                <Frame21>
                  <p>Total de itens</p>
                  <p>R${TotalItens.toFixed(2)}</p>
                </Frame21>

                <Frame22>
                  <p>Entrega</p>
                  <p>R$ 3,50</p>
                </Frame22>

                <Frame23>
                  <strong>Total</strong>
                  <strong>R$ {Total.toFixed(2)}</strong>
                </Frame23>

                <Enviar type="submit">confirmar pedido</Enviar>
              </Frame2>
            </div>
          </div>
        </FormContainer>
      </>
  )
}