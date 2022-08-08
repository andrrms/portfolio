import ContentContainer from "../../styles/ContentContainer";
import AnchorTitle from "../AnchorTitle";
import { ContactFooterContainer } from "./styles";

export default function ContactFooter() {
  return (
    <ContactFooterContainer>
      <ContentContainer>
        <AnchorTitle anchor="contact">Vamos conversar melhor?</AnchorTitle>
        <p>Um formulário de contato muito lindo</p>
      </ContentContainer>
    </ContactFooterContainer>
  );
}
