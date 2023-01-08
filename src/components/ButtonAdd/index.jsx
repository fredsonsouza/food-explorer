import { Container } from "./styles";

export function ButtonAdd({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon size={26} />}
      {title}
    </Container>
  );
}
