import styled, { css } from "styled-components";

export const PolaroidContainer = styled.div`
  width: var(--polaroid-width);
  height: var(--polaroid-height);

  ${({ noTransform }) =>
    !noTransform &&
    css`
      transform: rotate(4deg);
    `}

  background-color: #fff;

  padding: 10px;

  box-shadow: 1px 4px 13px 1px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    width: var(--polaroid-width-L);
    height: var(--polaroid-height-L);
  }

  transition: 0.2s;

  ${({ noTransform }) =>
    !noTransform &&
    css`
      @media screen {
        &:hover,
        &:focus-within {
          box-shadow: 0px 7px 17px 1px rgba(0, 0, 0, 0.5);

          transform: rotate(0deg) scale(110%);
        }
      }

      @media screen and (prefers-reduced-motion) {
        transition: none;

        &:hover,
        &:focus-within {
          box-shadow: 1px 4px 13px 1px rgba(0, 0, 0, 0.25);
          transform: rotate(4deg) scale(100%);
        }
      }
    `}
`;

export const PolaroidPhotoContainer = styled.figure`
  width: 100%;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

export const PolaroidCaption = styled.figcaption`
  color: #000;

  font-family: "Nothing You Could Do";
  font-size: 28px;
  text-align: ${({ fullArea }) => (fullArea ? "center" : "right")};

  width: ${({ fullArea }) => (fullArea ? "100%" : "95%")};
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: ${({ fullArea }) => (fullArea ? "center" : "flex-end")};
  align-items: center;

  padding-top: 10px;

  transform: rotate(-2deg);

  svg {
    font-size: 22px;
  }
`;

export const PolaroidSticker = styled.figure`
  width: 35%;

  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: flex-end;

  padding: 5px;
  margin-bottom: 10px;

  img {
    width: 100%;
  }
`;
