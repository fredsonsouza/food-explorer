import { ButtonText } from "../ButtonText";
import { Container } from "./styles";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsReceipt } from "react-icons/bs";
import { ButtonAdd } from "../ButtonAdd";

export function Counter({ value }) {
  return (
    <Container>
      <div>
        <ButtonText icon={FiMinus} />
        <span>{value}</span>
        <ButtonText icon={FiPlus} />
      </div>
      <ButtonAdd title="incluir" />
    </Container>
  );
}
