import { ButtonText } from "../ButtonText";
import { Container } from "./styles";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsReceipt } from "react-icons/bs";
import { ButtonAdd } from "../ButtonAdd";

export function Counter() {
  return (
    <Container>
      <div>
        <ButtonText icon={FiMinus} />
        <span>01</span>
        <ButtonText icon={FiPlus} />
      </div>
      <ButtonAdd title="incluir" icon={BsReceipt} />
    </Container>
  );
}
