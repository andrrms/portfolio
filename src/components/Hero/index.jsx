import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import ContentContainer from "../../styles/ContentContainer";
import Navbar from "../Navbar";

import PolaroidStripes from "../PolaroidStripes";
import SpreadText from "../SpreadText";
import ThemeLinkButton from "../ThemeLinkButton";

import {
  HeroContainer,
  Subtitle,
  SubtitleContainer,
  TextGroup,
  ButtonGroup,
} from "./styles";

export default function Hero() {
  const [isPrimary, setIsPrimary] = useState(true);
  const [ref, inView, entry] = useInView({ threshold: 0.1 });

  useEffect(() => setIsPrimary(inView), [, inView]);

  return (
    <HeroContainer ref={ref}>
      <Navbar primary={isPrimary} />
      <SubtitleContainer>
        <Subtitle>Desenvolvedor Frontend</Subtitle>
      </SubtitleContainer>
      <TextGroup>
        <SpreadText text="André" />
        <SpreadText text="Silveira" reversedAnimation />
      </TextGroup>
      {/* <ButtonGroup>
        <ThemeLinkButton primary href="#contact">
          Quero Contratar
        </ThemeLinkButton>
        <ThemeLinkButton href="#about">Saiba mais</ThemeLinkButton>
      </ButtonGroup> */}
      <PolaroidStripes />
    </HeroContainer>
  );
}
