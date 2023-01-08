import { Container } from "./styles";

export function Price({ coin, value }) {
  return (
    <Container>
      {(coin = "R$")}
      <p>{value}</p>
    </Container>
  );
}
