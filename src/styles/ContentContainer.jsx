import styled from "styled-components";

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 90%;

  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 70%;
  }

  @media screen and (min-width: 2560px) {
    max-width: 60%;
  }
`;

export default ContentContainer;
