import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OrderTable } from "../../components/OrderTable";
import { Container, Content } from "./styles";

export function OrderList() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <h2>Pedidos</h2>
          <OrderTable />
        </Content>
      </main>
      <Footer />
    </Container>
  );
}
