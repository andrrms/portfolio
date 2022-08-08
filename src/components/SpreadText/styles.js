import styled, { keyframes, css } from "styled-components";

import ContentContainer from "../../styles/ContentContainer";

const FONT_SIZE = 60;

export const SpreadTextContainer = styled.div`
  max-width: 100%;
  overflow: hidden;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Marquee = keyframes`
  0% {
    transform: translate(0, 0);
    //left: 0%;
  }
  100% {
    transform: translate(-100%, 0);
    //left: -100%;
  }
`;

export const GhostText = styled.span`
  font-family: "IBM Plex Mono";
  font-size: ${FONT_SIZE}px;
  text-transform: lowercase;
  text-align: right;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--landing-text-on-bg);
  color: transparent;
  opacity: 0.25;

  max-width: 100%;
  overflow: hidden;
  user-select: none;

  display: inline-block;

  animation: ${Marquee} 15s linear infinite;
  ${({ reversed }) =>
    reversed &&
    css`
      animation-direction: reverse;
    `}
  position: relative;
  left: 0;

  @media (min-width: 1024px) {
    font-size: 120px;

    animation-duration: 30s;
  }
`;

export const GhostText2 = styled(GhostText)`
  //animation-delay: 5s;
`;

export const ScrollingMarquee = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const TextContainer = styled(ContentContainer)`
  width: 100%;
  height: fit-content;

  position: absolute;
  top: 0;

  display: flex;
  justify-content: flex-end;
  align-self: center;
`;

export const ActualText = styled.h1`
  font-family: "IBM Plex Mono";
  font-size: ${FONT_SIZE}px;
  text-transform: lowercase;
  text-align: right;

  color: var(--landing-text-on-bg);
  //background-color: var(--landing-bg);

  max-width: 100%;
  overflow: hidden;

  display: inline-block;

  @media (min-width: 1024px) {
    font-size: 120px;
  }
`;

export const RefText = styled(GhostText)`
  font-family: "IBM Plex Mono";
  font-size: ${FONT_SIZE}px;
  text-align: right;

  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--landing-text-on-bg);
  color: transparent;
  opacity: 0.3;

  max-width: 100%;
  overflow: hidden;
  user-select: none;

  display: inline-block;
`;
