import { Container, Brand, Form } from "./styles";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const data = useAuth();
  console.log("MEU CONTEXTO ==>", data);
  return (
    <Container>
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
      <Form>
        <h2>Faça login</h2>
        <div>
          <label htmlFor="">Email</label>
          <input placeholder="Ex: email@.com.br" />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input placeholder="No mínimo 6 caracteres" />
        </div>

        <Button title="Entrar" />

        <a href="">Criar uma conta</a>
      </Form>
    </Container>
  );
}
