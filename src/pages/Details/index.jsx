import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Price } from "../../components/Price";
import { ButtonText } from "../../components/ButtonText";
import { Counter } from "../../components/Counter";

import { IoIosArrowBack } from "react-icons/io";

import dish from "../../assets/dish.png";
import { Tag } from "../../components/Tag";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonText title="voltar" icon={IoIosArrowBack}></ButtonText>
        <Section>
          <img src={dish} alt="Imagem do prato selecionado para pedido" />
          <div>
            <h2>Salada Ravanello</h2>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
            </p>

            <Tag title="alface" />
            <Tag title="cebola" />
            <Tag title="pão naan" />
            <Tag title="rabanete" />
            <Tag title="tomate" />

            <Button title="Editar prato" />
          </div>
        </Section>
      </Content>
      <Footer></Footer>
    </Container>
  );
}
