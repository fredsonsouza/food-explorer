import { Container, Content, List, Payment, Form } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import dish from "../../assets/dish.png";
import pix from "../../assets/pix.svg";
import card from "../../assets/credit-card.svg";
import { TfiCreditCard } from "react-icons/tfi";
import { BsReceipt } from "react-icons/bs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Order() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <List>
            <h2>Meu pedido</h2>
            <ul>
              <li>
                <img src={dish} alt="" />
                <div>
                  <span>1 x Salada Radish</span>
                  <strong>R$ 25,97</strong>
                  <ButtonText title="excluir" />
                </div>
              </li>
              <li>
                <img src={dish} alt="" />
                <div>
                  <span>1 x Salada Radish</span>
                  <strong>R$ 25,97</strong>
                  <ButtonText title="excluir" />
                </div>
              </li>
              <li>
                <img src={dish} alt="" />
                <div>
                  <span>1 x Salada Radish</span>
                  <strong>R$ 25,97</strong>
                  <ButtonText title="excluir" />
                </div>
              </li>
              <li>
                <img src={dish} alt="" />
                <div>
                  <span>1 x Salada Radish</span>
                  <strong>R$ 25,97</strong>
                  <ButtonText title="excluir" />
                </div>
              </li>
            </ul>
            <span className="total">Total: R$ 103,88</span>
          </List>
          <Payment>
            <h2>Pagamento</h2>
            <div>
              <div className="payment-type">
                <div className="pix">
                  <img src={pix} alt="" />
                  <ButtonText title="PIX"></ButtonText>
                </div>
                <div className="credit-card">
                  <img src={card} alt="" />
                  <ButtonText title="Crédito" />
                </div>
              </div>
              <Form>
                <div class="col-1">
                  <div>
                    <label htmlFor="">Número do cartão</label>
                    <Input type="text" placeholder="0000 0000 0000 0000" />
                  </div>
                </div>
                <div class="col-2">
                  <div>
                    <label htmlFor="">Validade</label>
                    <Input type="text" placeholder="04/25" />
                  </div>
                  <div>
                    <label htmlFor="">CVC</label>
                    <Input placeholder="065" />
                  </div>
                </div>
                <Button icon={BsReceipt} title="Finalizar pagamento" />
              </Form>
            </div>
          </Payment>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
