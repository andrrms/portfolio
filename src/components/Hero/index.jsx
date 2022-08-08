import React from "react";
import ContentContainer from "../../styles/ContentContainer";
import Navbar from "../Navbar";

import PolaroidStripes from "../PolaroidStripes";
import SpreadText from "../SpreadText";

import {
  HeroContainer,
  Subtitle,
  SubtitleContainer,
  TextGroup,
  ButtonGroup,
  TestButton,
} from "./styles";

export default function Hero() {
  return (
    <HeroContainer>
      <Navbar />
      <SubtitleContainer>
        <Subtitle>Desenvolvedor Frontend</Subtitle>
      </SubtitleContainer>
      <TextGroup>
        <SpreadText text="André" />
        <SpreadText text="Silveira" reversedAnimation />
      </TextGroup>
      <ButtonGroup>
        <TestButton primary href="#contact">
          Quero Contratar
        </TestButton>
        <TestButton href="#about">Saiba mais</TestButton>
      </ButtonGroup>
      <PolaroidStripes />
    </HeroContainer>
  );
}
