import { Header } from "../../components/Header";
import { Container, Content, Info } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { IoIosArrowBack } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";

import dish from "../../assets/dish.png";
import receipt from "../../assets/Receipt.svg";
import vegetable1 from "../../assets/vegetable1.png";
import vegetable2 from "../../assets/vegetable2.png";
import vegetable3 from "../../assets/vegetable3.png";
import vegetable4 from "../../assets/vegetable4.png";
import { Button } from "../../components/Button";
import { Price } from "../../components/Price";
import { Counter } from "../../components/Counter";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <div>
            <ButtonText title="voltar" icon={IoIosArrowBack}></ButtonText>
            <img src={dish} alt="Imagem do prato selecionado para pedido" />
          </div>
          <Info>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <div>
              <ul>
                <li>
                  <img src={vegetable1} alt="" />
                  <span>alface</span>
                </li>
                <li>
                  <img src={vegetable2} alt="" />
                  <span>tomate</span>
                </li>
                <li>
                  <img src={vegetable3} alt="" />
                  <span>rabanete</span>
                </li>
                <li>
                  <img src={vegetable4} alt="" />
                  <span>pão naan</span>
                </li>
              </ul>
            </div>

            <div>
              <Price value="29,90"></Price>
              <Counter></Counter>
            </div>
          </Info>
        </Content>
      </main>
    </Container>
  );
}
