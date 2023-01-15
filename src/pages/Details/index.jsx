import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
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
      <main>
        <Content>
          <ButtonText title="voltar" icon={IoIosArrowBack}></ButtonText>
          <section>
            <img src={dish} alt="Imagem do prato selecionado para pedido" />
            <div class="details">
              <h2>Salada Ravanello</h2>
              <p>
                Rabanetes, folhas verdes e molho agridoce salpicados com
                gergelim.
              </p>
              <IngredientsList></IngredientsList>
              <div class="pay">
                <Price value="29,90"></Price>
                <Counter value="01"></Counter>
              </div>
            </div>
          </section>
        </Content>
      </main>
      <Footer></Footer>
    </Container>
  );
}
