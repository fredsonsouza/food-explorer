import { Container } from "./styles";
import vegetable1 from "../../assets/vegetable1.png";
import vegetable2 from "../../assets/vegetable2.png";
import vegetable3 from "../../assets/vegetable3.png";
import vegetable4 from "../../assets/vegetable4.png";
export function IngredientsList() {
  return (
    <Container>
      <div>
        <li>
          <img src={vegetable1} alt="" />
          <span>alface</span>
        </li>
        <li>
          <img src={vegetable2} alt="" />
          <span>tomate</span>
        </li>
        <li>
          <img src={vegetable3} alt="" />
          <span>rabanete</span>
        </li>
        <li>
          <img src={vegetable4} alt="" />
          <span>pão naan</span>
        </li>
      </div>
    </Container>
  );
}
