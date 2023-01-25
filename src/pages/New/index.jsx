import { Container, Content, Form } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="voltar" icon={IoIosArrowBack}></ButtonText>
          <Section title="Editar prato">
            <Form>
              <div class="col-2">
                <div>
                  <label htmlFor="">Imagem do prato</label>

                  <Input type="file" placeholder="selecione imagem" />
                </div>
                <div>
                  <label htmlFor="">Nome</label>
                  <Input placeholder="Ex: Salada Ceasar" />
                </div>
              </div>
              <div class="col-2-2">
                <div>
                  <label htmlFor="">Ingredientes</label>
                  <Input />
                </div>
                <div>
                  <label htmlFor="">Preço</label>
                  <Input placeholder="R$ 00,00" />
                </div>
              </div>
              <div>
                <label htmlFor="">Descrição</label>
                <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
              </div>
              <button>Adicionar pedido</button>
            </Form>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
