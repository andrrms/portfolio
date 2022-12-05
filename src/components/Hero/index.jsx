import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import ContentContainer from "../../styles/ContentContainer";
import Navbar from "../Navbar";

import PolaroidStripes from "../PolaroidStripes";
import SpreadText from "../SpreadText";
import HeroPattern from "../../assets/hero_bg.gif";

import {
  HeroContainer,
  Subtitle,
  SubtitleContainer,
  TextGroup,
  HeroBackground,
} from "./styles";

export default function Hero() {
  const [isPrimary, setIsPrimary] = useState(true);
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => setIsPrimary(inView), [, inView]);

  return (
    <HeroContainer ref={ref}>
      <HeroBackground src={HeroPattern} loading="lazy" />
      <Navbar primary={isPrimary} hideMobile />
      <SubtitleContainer>
        <Subtitle>Desenvolvedor Full Stack</Subtitle>
      </SubtitleContainer>
      <TextGroup>
        <SpreadText text="André" />
        <SpreadText text="Silveira" reversedAnimation />
      </TextGroup>
      <PolaroidStripes />
    </HeroContainer>
  );
}
