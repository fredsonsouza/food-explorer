import { Container, Content, Introduction, Dishes } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Price } from "../../components/Price";
import { Counter } from "../../components/Counter";
import { Footer } from "../../components/Footer";
import bghome from "../../assets/h1.svg";
import dish1 from "../../assets/dish1.jpg";
import dish2 from "../../assets/dish2.jpg";
import dish3 from "../../assets/dish3.jpg";

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
              <li>
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
              </li>
              <li>
                <img src={dish2} alt="" />
                <div>
                  <span>Torradas de Parma</span>
                  <strong>
                    Presunto de parma e rúcula em um pão com fermentação
                    natural.
                  </strong>
                </div>
                <div>
                  <Price value="27,99" />
                  <Counter value="01" />
                </div>
              </li>
              <li>
                <img src={dish3} alt="" />
                <div>
                  <span>Spaguetti Gambe</span>
                  <strong>Massa fresca com camarões e pesto.</strong>
                </div>
                <div>
                  <Price value="27,99" />
                  <Counter value="01" />
                </div>
              </li>
              <li>
                <img src={dish3} alt="" />
                <div>
                  <span>Spaguetti Gambe</span>
                  <strong>Massa fresca com camarões e pesto.</strong>
                </div>
                <div>
                  <Price value="27,99" />
                  <Counter value="01" />
                </div>
              </li>
            </Dishes>
          </Section>
          <Section title="Sobremesas">
            <Dishes>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
            </Dishes>
          </Section>
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
