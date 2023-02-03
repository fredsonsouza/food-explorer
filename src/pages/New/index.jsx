import { Container, Content, Form } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IngredientItem } from "../../components/IngredientItem";
export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="voltar" icon={IoIosArrowBack}></ButtonText>
          <Section title="Adicionar prato">
            <Form>
              <div className="col-3">
                <div className="img-dishe">
                  <label>Imagem do prato</label>
                  <div>
                    <label htmlFor="arrow">
                      <FiUpload /> selecione a imagem
                      <input
                        id="arrow"
                        type="file"
                        placeholder="selecionar imagem"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="">Nome</label>
                  <Input placeholder="Ex: Salada Ceasar" />
                </div>
                <div className="col-3-select">
                  <label htmlFor="">Categoria</label>
                  <div>
                    <select name="" id="event-category">
                      <option value="category1">Refeição</option>
                      <option value="category2">Bebida</option>
                      <option value="category3">Sobremesa</option>
                    </select>
                  </div>
                </div>
              </div>
              <Section>
                <div className="ingredients">
                  <div className="ingredients-tags">
                    <label>Ingredientes</label>
                    <div className="ingredient-item">
                      <IngredientItem value="Alface Verde" />

                      <IngredientItem isNew placeholder="Adicionar" />
                    </div>
                  </div>
                  <div>
                    <label>Preço</label>
                    <div className="price">
                      <Input placeholder="R$ 00,00" />
                    </div>
                  </div>
                </div>
              </Section>
              <div>
                <label htmlFor="">Descrição</label>
                <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
              </div>
              <div className="buttons">
                <Button title="Editar prato" />
                <Button title="Salvar Alterações" />
              </div>
            </Form>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
