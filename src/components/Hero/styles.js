import styled, { css } from "styled-components";

import ContentContainer from "../../styles/ContentContainer";
import { PolaroidStripesContainer } from "../PolaroidStripes/styles";

export const TextGroup = styled.div`
  margin: 20px 0;
  margin-bottom: 30px;
`;

export const Subtitle = styled.h3`
  font-family: "IBM Plex Mono";
  font-weight: 700;
  font-size: 20px;
  text-align: center;

  color: var(--color-yellow-700);

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

export const SubtitleContainer = styled(ContentContainer)`
  margin-top: 60px;

  @media (min-width: 1024px) {
    margin-top: auto;
  }
`;

export const HeroContainer = styled.header`
  padding-top: 60px;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    height: 100vh;
    padding-top: 80px;

    ${PolaroidStripesContainer} {
      order: 0;

      margin-top: auto;
    }

    ${SubtitleContainer} {
      order: 2;
      height: fit-content;
      //margin-top: 20px;

      ${Subtitle} {
        text-align: right;
      }
    }

    ${TextGroup} {
      order: 3;

      margin: 0;
      margin-top: 10px;
      margin-bottom: -10px;
    }
  }
`;

export const ButtonGroup = styled(ContentContainer)`
  display: flex;
  justify-content: center;
  gap: 24px;

  height: fit-content;

  margin-bottom: 30px;

  @media (min-width: 1024px) {
    order: 1;

    margin-top: 5vh;
    margin-bottom: 0;

    justify-content: flex-end;
  }
`;
