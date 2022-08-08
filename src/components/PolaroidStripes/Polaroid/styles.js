import styled from "styled-components";

export const PolaroidContainer = styled.div`
  width: 250px;
  height: 320px;

  transform: rotate(4deg);

  background-color: #fff;

  padding: 10px;

  box-shadow: 1px 4px 13px 1px rgba(0, 0, 0, 0.25);

  @media (min-width: 1024px) {
    width: 300px;
    height: 370px;
  }

  transition: 0.2s;

  @media screen {
    &:hover {
      box-shadow: 0px 7px 17px 1px rgba(0, 0, 0, 0.5);

      transform: rotate(0deg) scale(110%);
    }
  }
`;

export const PolaroidPhotoContainer = styled.figure`
  display: flex;
  flex-direction: column;

  height: 100%;

  img {
    width: 100%;
  }
`;

export const PolaroidCaption = styled.figcaption`
  color: #000;

  font-family: "Nothing You Could Do";
  font-size: 28px;
  text-align: right;

  width: 95%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: flex-end;
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
