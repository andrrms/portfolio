import ContentContainer from "../../styles/ContentContainer";
import AnchorTitle from "../AnchorTitle";
import { ContactFooterContainer } from "./styles";

export default function ContactFooter() {
  return (
    <ContactFooterContainer>
      <ContentContainer>
        <AnchorTitle anchor="contact">Vamos conversar melhor?</AnchorTitle>
        <p>
          Você pode me enviar um e-mail em{" "}
          <a href="mailto:pro.andresilvera@gmail.com" target="_blank">
            pro.andresilvera@gmail.com
          </a>
        </p>
        <p>
          Ou se preferir, pode me contatar através do{" "}
          <a href="https://www.linkedin.com/in/andrrms" target="_blank">
            LinkedIn
          </a>
          .
        </p>
      </ContentContainer>
    </ContactFooterContainer>
  );
}
