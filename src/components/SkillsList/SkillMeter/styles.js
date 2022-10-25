import styled, { css } from "styled-components";

export const SkillMeterContainer = styled.li`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 90vw;
  height: fit-content;
  padding: 10px;

  /* background-color: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2); */
`;

export const Percentage = styled.span`
  color: ${({ color }) => color};
`;

export const MeterTitle = styled.label`
  font-family: "IBM Plex Mono";
  font-size: 1.4rem;
`;

export const HiddenMeter = styled.meter`
  display: none;
`;

export const FigureRow = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  gap: 10px;
`;

export const Figure = styled.li`
  width: 100%;
  height: 100%;
  position: relative;

  max-width: 60px;

  img {
    width: 100%;
    height: 100%;

    transform: rotate(${({ rotation }) => rotation}deg);
  }

  ${({ type, rotation }) => {
    switch (type) {
      case "off": {
        return css`
          filter: saturate(0%) brightness(80%);
          opacity: 0.5;
        `;
      }

      // TODO: Fix this
      case "half": {
        return css`
          &::after {
            content: "";
            position: absolute;
            width: 50%;
            height: 100%;
            right: 0;
            top: ${rotation / 3}px;
            /* background-color: #000;
            opacity: 0.5; */
            transform: rotate(${rotation}deg);
            backdrop-filter: saturate(0%) brightness(80%);
          }
        `;
      }

      default: {
        return css``;
      }
    }
  }}
`;
