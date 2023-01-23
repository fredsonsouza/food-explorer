import { Container, PaymentType, QRCODE } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { BsReceipt } from "react-icons/bs";
import { TfiCreditCard } from "react-icons/tfi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import qrcode from "../../assets/qrcode.svg";

export function Payment() {
  return (
    <Container>
      <section>
        <div className="method">
          <div className="pix">
            <FontAwesomeIcon icon="fa-brands fa-pix" />
            <ButtonText title="PIX" />
          </div>
          <div className="card">
            <ButtonText icon={TfiCreditCard} title="Crédito" />
          </div>
        </div>
        <PaymentType>
          <div class="col-1">
            <div>
              <label htmlFor="">Número do cartão</label>
              <Input type="text" placeholder="0000 0000 0000 0000" />
            </div>
          </div>
          <div class="col-2">
            <div>
              <label htmlFor="">Validade</label>
              <Input type="text" placeholder="04/25" />
            </div>
            <div>
              <label htmlFor="">CVC</label>
              <Input placeholder="065" />
            </div>
          </div>
          <Button icon={BsReceipt} title="Finalizar pagamento" />
        </PaymentType>

        <QRCODE>
          <div>
            <img src={qrcode} alt="Imagem do qrcode para pagamento" />
          </div>
        </QRCODE>
      </section>
    </Container>
  );
}
