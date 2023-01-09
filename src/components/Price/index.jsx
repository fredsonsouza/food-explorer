import { Container } from "./styles";

export function Price({ coin, value }) {
  return (
    <Container>
      {(coin = "R$ ")}
      {value}
    </Container>
  );
}
