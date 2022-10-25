import styled, { keyframes, css } from "styled-components";

export const PolaroidGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

export const CarouselList = styled.ul`
  display: flex;
`;

export const LeftPolaroid = styled.li`
  z-index: 10;
  margin-right: calc(var(--polaroid-width) * -0.95);

  transform: rotate(-4deg);
  user-select: none;

  @media (min-width: 1024px) {
    margin-right: calc(var(--polaroid-width-L) * -0.95);
  }

  transition: transform ease 0.2s;

  ${({ anim }) =>
    anim &&
    css`
      animation: ${SwipeRight} ease 0.4s;
    `};
`;

export const RightPolaroid = styled.li`
  z-index: 10;
  margin-left: calc(var(--polaroid-width) * -0.95);

  transform: rotate(4deg);
  user-select: none;

  @media (min-width: 1024px) {
    margin-left: calc(var(--polaroid-width-L) * -0.95);
  }

  ${({ anim }) =>
    anim &&
    css`
      animation: ${SwipeLeft} ease 0.4s;
    `};
`;

const SwipeRight = keyframes`
  50% {
    transform: rotate(5deg) translateX(30px);
  }
`;

const SwipeLeft = keyframes`
  50% {
    transform: rotate(-5deg) translateX(-30px);
  }
`;

export const MainPolaroid = styled.li`
  z-index: 50;

  ${({ anim }) => {
    switch (anim) {
      case "right": {
        return css`
          animation: ${SwipeRight} ease 0.5s;
        `;
      }

      case "left": {
        return css`
          animation: ${SwipeLeft} ease 0.5s;
        `;
      }

      default: {
        return;
      }
    }
  }}
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    display: inline-block;
    width: 30px;
    text-align: center;
  }
`;

export const MediaButton = styled.button`
  color: #000;
  background-color: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 50%;

  font-family: "IBM Plex Mono";
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1pt orange;
    border-color: #000;
    border-radius: 50%;
  }
`;
