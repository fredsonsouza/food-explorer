import { Container, Content, Brand, Search, Logout } from "./styles";
import { FiLogOut, FiSearch } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Content>
        <Brand>
          <svg
            width="26"
            height="30"
            viewBox="0 0 26 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z"
              fill="#065E7C"
            />
          </svg>
          <h1>food explorer</h1>
        </Brand>

        <a href="">Meus favoritos</a>
        <Search>
          <Input icon={FiSearch} placeholder="Busque pelas opções de pratos" />
        </Search>
        <Button title="Meus pedidos (0)" />
        <Logout>
          <FiLogOut></FiLogOut>
        </Logout>
      </Content>
    </Container>
  );
}
