import { Container, Content } from "./styles";

export function Footer() {
  return (
    <Container>
      <Content>
        <div>
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0635 0.0510254L25.7096 7.35221V21.9546L13.0635 29.2557L0.417527 21.9546V7.35221L13.0635 0.0510254Z"
              fill="white"
            />
          </svg>

          <h1>food explorer</h1>
        </div>

        <span>© 2023 - Todos os direitos reservados.</span>
      </Content>
    </Container>
  );
}
