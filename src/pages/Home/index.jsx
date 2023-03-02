import { Container, Content, Introduction, Dish, Dishes } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Price } from "../../components/Price";
import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Footer";
import bghome from "../../assets/h1.svg";
import pencil from "../../assets/pencil.svg";
import dish1 from "../../assets/dish1.jpg";
import dish2 from "../../assets/dish2.jpg";
import dish3 from "../../assets/dish3.jpg";

import { Link } from "react-router-dom";

export function Home() {
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
          <Section title="Pratos principais">
            <Dishes>
              <Dish>
                <Link to="/edit">
                  <div className="pencil">
                    <button>
                      <img src={pencil} alt="" />
                    </button>
                  </div>
                </Link>
                <img src={dish1} alt="" />
                <div>
                  <span>Salada Ravanello</span>
                  <strong>
                    Rabanetes, folhas verdes e molho agridoce salpicados com
                    gergelim
                  </strong>
                </div>
                <div>
                  <Price value="27,99" />
                  <Counter value="01" />
                </div>
              </Dish>
            </Dishes>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
