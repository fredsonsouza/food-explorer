import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

import { Container } from "./styles";
import { ButtonAdd } from "../../components/ButtonAdd";
import { useAuth } from "../../hooks/auth.jsx";

import pencil from "../../assets/pencil.svg";

import { Link } from "react-router-dom";

import dish1 from "../../assets/dish1.jpg";

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <li>
        <div className="pencil">
          <button>
            <img src={pencil} alt="" />
          </button>
        </div>
        {/* <img src={dish1} alt="" /> */}
        <div className="info">
          <h3>{data.name}</h3>
          <p>
            {data.description}
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
          </p>
          <strong>R$ {data.price}</strong>
        </div>
        <div className="buttons">
          <div className="counter">
            <button>
              <FiMinus size={25} />
            </button>
            <span>01</span>
            <button>
              <FiPlus size={25} />
            </button>
          </div>

          <ButtonAdd title="incluir" />
        </div>
      </li>
    </Container>
  );
}
