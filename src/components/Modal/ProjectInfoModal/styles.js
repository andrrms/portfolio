import styled, { keyframes } from "styled-components";

// O card de papel abaixo não foi feito por mim,
// apenas usado e editado.
//
// Link do projeto original: https://codepen.io/camila_waz/pen/MzrgjE
// Data de acesso: 29/09/2022 - 09:23

const SimpleFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const SimpleSlideIn = keyframes`
  from {
    transform: translateY(50px);
  }

  to {
    transform: translateY(0px);
  }
`;

export const ProjectInfoModalContainer = styled.aside`
  border-radius: 5px 5px 10px 10px;
  background-color: #fff;
  color: #000;
  overflow: hidden;
  box-shadow: 10px 10px 40px rgba(#000, 0.15);

  animation: ${SimpleFadeIn} ease-out 0.3s, ${SimpleSlideIn} ease 0.3s;

  width: 90vmin;
`;

export const TopBar = styled.header`
  width: 100%;
  height: 50px;
  background: #333;
  border-radius: 5px 5px 0 0;
  color: #fff;

  font-family: "IBM Plex Mono";
  font-weight: 700;

  display: flex;
  align-items: center;
  padding: 10px;
  padding-left: 30px;
`;

export const Paper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 30vh;
  max-height: 70vh;
  padding: 35px 20px;
  outline: 0;

  background: repeating-linear-gradient(
    #f1ede9,
    #f1ede9 31px,
    #94acd4 31px,
    #94acd4 32px
  );

  font-family: "Nothing You Could Do", cursive;
  line-height: 32px;
  font-size: 22px;
`;
