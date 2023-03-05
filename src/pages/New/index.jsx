import { Container, Content, Form } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { IngredientItem } from "../../components/IngredientItem";
import { Link } from "react-router-dom";

export function New() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const list = [
    { id: 1, name: "Refeição" },
    { id: 2, name: "Bebidas" },
    { id: 3, name: "Sobremesa" },
  ];

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }
  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewDishe() {
    await api.post("/dishes", {
      name,
      category,
      ingredients,
      price,
      description,
    });
    alert("Prato cadastrado com sucesso!");
    navigate("/");
  }
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/">
            <ButtonText title="voltar" icon={IoIosArrowBack}></ButtonText>
          </Link>
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
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Salada Ceasar"
                  />
                </div>
                <div className="col-3-select">
                  <label htmlFor="">Categoria</label>
                  <div>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      name=""
                      id="event-category"
                    >
                      {list.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <Section>
                <div className="tags">
                  <div className="tags-tags">
                    <label>Ingredientes</label>
                    <div className="ingredient-item">
                      {ingredients.map((ingredient, index) => (
                        <IngredientItem
                          key={String(index)}
                          value={ingredient}
                          onClick={() => handleRemoveIngredient(ingredient)}
                        />
                      ))}

                      <IngredientItem
                        isNew
                        placeholder="Adicionar"
                        onChange={(e) => setNewIngredient(e.target.value)}
                        value={newIngredient}
                        onClick={handleAddIngredient}
                      />
                    </div>
                  </div>
                  <div>
                    <label>Preço</label>
                    <div className="price">
                      <Input
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="R$ 00,00"
                      />
                    </div>
                  </div>
                </div>
              </Section>
              <div>
                <label htmlFor="">Descrição</label>
                <TextArea
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                />
              </div>
              <div className="buttons">
                {/* <Button title="Editar prato" /> */}
                <Button onClick={handleNewDishe} title="Salvar Alterações" />
              </div>
            </Form>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
