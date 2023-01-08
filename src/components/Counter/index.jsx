import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { Container } from "./styles";
import { FiMinus, FiPlus } from "react-icons/fi";
import { BsReceipt } from "react-icons/bs";

export function Counter() {
  return (
    <Container>
      <div>
        <ButtonText icon={FiMinus} />
        <span>01</span>
        <ButtonText icon={FiPlus} />
      </div>
      <Button title="incluir" icon={BsReceipt} />
    </Container>
  );
}
