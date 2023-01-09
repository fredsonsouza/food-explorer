import { Container, Content, Return } from "./styles";

import { Header } from "../../components/Header";
import { Price } from "../../components/Price";
import { ButtonText } from "../../components/ButtonText";
import { Counter } from "../../components/Counter";

import { IoIosArrowBack } from "react-icons/io";

import dish from "../../assets/dish.png";
import { IngredientsList } from "../../components/IngredientsList";

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <Return>
          <ButtonText title="voltar" icon={IoIosArrowBack}></ButtonText>
        </Return>
        <main>
          <div>
            <img src={dish} alt="Imagem do prato selecionado para pedido" />
          </div>
          <section>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>
            <IngredientsList></IngredientsList>
            <div>
              <Price value="29,90"></Price>
              <Counter value="01"></Counter>
            </div>
          </section>
        </main>
      </Content>
    </Container>
  );
}
