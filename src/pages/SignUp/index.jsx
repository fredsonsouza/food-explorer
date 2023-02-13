import { useState } from "react";
import { Button } from "../../components/Button";
import { Container, Form, Brand } from "./styles";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Informe todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar o usuário");
        }
      });
  }
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
        <h2>Crie sua conta</h2>
        <div>
          <label htmlFor="">Nome</label>
          <input
            placeholder="Ex: Maria da Silva"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            placeholder="Ex: email@.com.br"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input
            type="password"
            placeholder="No mínimo 6 caracteres"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button title="Criar conta" onClick={handleSignUp} />

        <a href="">Ja tenho uma conta</a>
      </Form>
    </Container>
  );
}
