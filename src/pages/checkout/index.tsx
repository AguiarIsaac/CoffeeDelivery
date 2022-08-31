import { MiniCard } from "../../components/MiniCard";

export function Checkout() {
    return (
        <>
          <div>
            <div>
              <h3>Complete seu endereço</h3>

              <div>
                <span>Endereço de Entrega</span>
                <p>Informa o endereço onde deseja receber seu pedido</p>

                <form>
                  <input type="text" placeholder="CEP" name="CEP" id="CEP" />
                  <input type="text" placeholder="Rua" name="RUA" id="RUA" />
                  <input type="text" placeholder="Número" name="NUM" id="NUM" />
                  <input type="text" placeholder="Complemento" name="COMP" id="COMP"/>
                  <input type="text" placeholder="Bairro" name="BAIRRO" id="BAIRRO" />
                  <input type="text" placeholder="Cidade" name="CIDADE" id="CIDADE" />
                  <input type="text" placeholder="UF" name="UF" id="UF" />
                </form>

                <div>
                  <span>Pagamento</span>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

                  <div>
                    <span>CARTÃO DE CRÉDITO</span>
                    <span>CARTÃO DE DÉBITO</span>
                    <span>DINHEIRO</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3>Cafés selecionados</h3>

              <div>
                <MiniCard />
                <MiniCard />

                <div>
                  <div>
                    <p>Total de itens</p>
                    <p>RS 29,70</p>
                  </div>

                  <div>
                    <p>Entrega</p>
                    <p>R$ 3,50</p>
                  </div>

                  <div>
                    <strong>Total</strong>
                    <strong>R$ 33,20</strong>
                  </div>
                </div>

                <button>CONFIRMAR PEDIDO</button>
              </div>
            </div>
          </div>
        </>
    )
}