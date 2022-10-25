import SkillMeter from "./SkillMeter";

import JsImage from "../../assets/js.png";
import TsImage from "../../assets/ts.png";
import NodeImage from "../../assets/node.png";
import ReactImage from "../../assets/react.png";
import HTMLImage from "../../assets/html.png";
import CSSImage from "../../assets/css.png";

import WebpJsImage from "../../assets/js.webp";
import WebpTsImage from "../../assets/ts.webp";
import WebpNodeImage from "../../assets/node.webp";
import WebpReactImage from "../../assets/react.webp";
import WebpHTMLImage from "../../assets/html.webp";
import WebpCSSImage from "../../assets/css.webp";

import { SkillsListContainer } from "./styles";

export default function SkillsList() {
  return (
    <SkillsListContainer>
      <SkillMeter
        img={JsImage}
        webpImg={WebpJsImage}
        alt="Logotipo da linguagem de programação JavaScript"
        name="JavaScript"
        value={5}
        max={6}
        color="#a36f0a"
      />
      <SkillMeter
        img={TsImage}
        webpImg={WebpTsImage}
        alt="Logotipo da linguagem de programação TypeScript"
        name="TypeScript"
        value={3.8}
        max={6}
        color="#1155c2"
      />
      <SkillMeter
        img={NodeImage}
        webpImg={WebpNodeImage}
        alt="Logotipo do runtime NodeJS"
        name="NodeJS"
        value={2.8}
        max={6}
        color="#226b0c"
      />
      <SkillMeter
        img={ReactImage}
        webpImg={WebpReactImage}
        alt="Logotipo da biblioteca ReactJS"
        name="React.js"
        value={4.5}
        max={6}
        color="#16669c"
      />
      <SkillMeter
        img={HTMLImage}
        webpImg={WebpHTMLImage}
        alt="Logotipo da linguagem de marcação HTML5"
        name="HTML5"
        value={5.9}
        max={6}
        color="#9c4016"
      />
      <SkillMeter
        img={CSSImage}
        webpImg={WebpCSSImage}
        alt="Logotipo da linguagem de estilização CSS3"
        name="CSS3"
        value={5}
        max={6}
        color="#0d2b8f"
      />
    </SkillsListContainer>
  );
}
