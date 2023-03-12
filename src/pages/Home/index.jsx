import { useState } from "react";

import { Container, Content, Introduction } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import bghome from "../../assets/h1.svg";
import { Card } from "../../components/Card";

export function Home() {
  const [dishes, setDishes] = useState([]);
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Introduction>
            <div>
              <img src={bghome} alt="" />
            </div>

            <div>
              <h2>Sabores Inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </Introduction>

          {dishes.filter((dish) => dish.category == "Sobremesas").length >
            0 && (
            <Section title="Sobremesas">
              {dishes
                .filter((dish) => dish.category == "Sobremesas")
                .map((dish) => (
                  <Card key={String(dish.id)} data={dish} />
                ))}
            </Section>
          )}
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
