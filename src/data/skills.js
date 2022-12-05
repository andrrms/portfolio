import JsImage from "../assets/js.png";
import TsImage from "../assets/ts.png";
import NodeImage from "../assets/node.png";
import ReactImage from "../assets/react.png";
import HTMLImage from "../assets/html.png";
import CSSImage from "../assets/css.png";
import PythonImage from "../assets/python.png";
import DjangoImage from "../assets/django.png";
import ExpressImage from "../assets/express.png";

import WebpJsImage from "../assets/js.webp";
import WebpTsImage from "../assets/ts.webp";
import WebpNodeImage from "../assets/node.webp";
import WebpReactImage from "../assets/react.webp";
import WebpHTMLImage from "../assets/html.webp";
import WebpCSSImage from "../assets/css.webp";
import WebpPythonImage from "../assets/python.webp";
import WebpDjangoImage from "../assets/django.webp";
import WebpExpressImage from "../assets/express.webp";

export const SkillCriteria = {
  DONT_KNOW: "Não sei",
  KNOW: "Sei",
  MASTER: "Sei e domino",
};

const skillsData = [
  {
    skillName: "JavaScript",
    skillImages: [JsImage],
    skillWebpImages: [WebpJsImage],
    skillColor: "#a36f0a",
    criteria: {},
  },
  {
    skillName: "TypeScript",
    skillImages: [TsImage],
    skillWebpImages: [WebpTsImage],
    skillColor: "#1155c2",
    criteria: {},
  },
  {
    skillName: "NodeJS",
    skillImages: [NodeImage],
    skillWebpImages: [WebpNodeImage],
    skillColor: "#226b0c",
    criteria: {},
  },
  {
    skillName: "ReactJS",
    skillImages: [ReactImage],
    skillWebpImages: [WebpReactImage],
    skillColor: "#16669c",
    criteria: {},
  },
  {
    skillName: "HTML5",
    skillImages: [HTMLImage],
    skillWebpImages: [WebpHTMLImage],
    skillColor: "#9c4016",
    criteria: {},
  },
  {
    skillName: "CSS3",
    skillImages: [CSSImage],
    skillWebpImages: [WebpCSSImage],
    skillColor: "#0d2b8f",
    criteria: {},
  },
  {
    skillName: "Python",
    skillImages: [PythonImage],
    skillWebpImages: [WebpPythonImage],
    skillColor: "#4B8BBE",
    criteria: {},
  },
  {
    skillName: "Django",
    skillImages: [DjangoImage],
    skillWebpImages: [WebpDjangoImage],
    skillColor: "#074d19",
    criteria: {},
  },
  {
    skillName: "Express",
    skillImages: [ExpressImage],
    skillWebpImages: [WebpExpressImage],
    skillColor: "#575656",
    criteria: {},
  },
];

export default skillsData;
