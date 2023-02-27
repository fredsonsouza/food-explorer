import { Container, Content, Brand, Search, Logout } from "./styles";
import { FiLogOut, FiSearch } from "react-icons/fi";
import { BsReceipt } from "react-icons/bs";
import { useAuth } from "../../hooks/auth";

import { Button } from "../../components/Button";
import search from "../../assets/search.svg";

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <Content>
        <nav>
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
            <strong>admin</strong>
          </Brand>

          <Search>
            <img src={search} alt="" />
            <input placeholder="Busque pelas opções de pratos" />
          </Search>
        </nav>
        <div>
          <Button title="Pedidos (0)"></Button>
          <Logout>
            <FiLogOut onClick={signOut}></FiLogOut>
          </Logout>
        </div>
      </Content>
    </Container>
  );
}
