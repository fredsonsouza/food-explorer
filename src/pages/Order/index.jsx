import { Container, Content, List } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import dish from "../../assets/dish.png";
import { ButtonText } from "../../components/ButtonText";
import { Payment } from "../../components/Payment";

export function Order() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <h2>Meu Pedido</h2>
            <List>
              <img src={dish} alt="" />
              <div>
                <span>1 x Salada Radish</span>
                <strong>R$ 25,97</strong>
                <ButtonText title="Excluir" />
              </div>
            </List>

            <List>
              <img src={dish} alt="" />
              <div>
                <span>1 x Salada Radish</span>
                <strong>R$ 25,97</strong>
                <ButtonText title="Excluir" />
              </div>
            </List>
            <List>
              <img src={dish} alt="" />
              <div>
                <span>1 x Salada Radish</span>
                <strong>R$ 25,97</strong>
                <ButtonText title="Excluir" />
              </div>
            </List>
            <List>
              <img src={dish} alt="" />
              <div>
                <span>1 x Salada Radish</span>
                <strong>R$ 25,97</strong>
                <ButtonText title="Excluir" />
              </div>
            </List>
            <span className="total">Total: R$ 103,88</span>
          </div>

          <div>
            <h2>Pagamento</h2>
            <Payment />
          </div>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
