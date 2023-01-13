import { Container, Content, Form } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { TextArea } from "../../components/TextArea";
import { InputForm } from "../../components/InputForm";
export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="voltar" icon={IoIosArrowBack}></ButtonText>
          <h2>Editar Prato</h2>
          <Form>
            <div class="col-2">
              <div>
                <label htmlFor="">Imagem do prato</label>

                <InputForm type="file" placeholder="selecione imagem" />
              </div>
              <div>
                <label htmlFor="">Nome</label>
                <InputForm placeholder="Ex: Salada Ceasar" />
              </div>
            </div>
            <div class="col-2-2">
              <div>
                <label htmlFor="">Ingredientes</label>
                <InputForm />
              </div>
              <div>
                <label htmlFor="">Preço</label>
                <InputForm placeholder="R$ 00,00" />
              </div>
            </div>
            <div>
              <label htmlFor="">Descrição</label>
              <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            </div>
            <button>Adicionar pedido</button>
          </Form>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
