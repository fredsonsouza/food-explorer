import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function IngredientItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        className={isNew ? "button-add" : "button-delete"}
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
