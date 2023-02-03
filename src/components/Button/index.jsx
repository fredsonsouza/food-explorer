import { Container } from "./styles";
import receipt from "../../assets/receipt.svg";

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <img src={receipt} alt="" />
      {title}
    </Container>
  );
}
