import styled from "styled-components";

export const HomePageContainer = styled.div`
  background-color: var(--landing-bg);

  color: var(--landing-text-on-bg);

  width: 100%;
  height: 100vh;
`;

export const ContentArea = styled.main`
  padding-top: calc(42px * 3);
  padding-bottom: 20px;

  background-color: var(--color-beige-200);
  color: #000;

  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 21px;
  font-weight: 400;

  .horizontalContent {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (min-width: 1280px) {
      display: grid;
      grid-template-columns: 60% 1fr;
      column-gap: 10px;
    }

    .photoArea {
      width: 100%;
    }
  }

  p {
    line-height: 28px;
    text-align: justify;

    margin-top: 30px;

    &:first-of-type {
      margin-top: 0;
    }

    strong {
      font-weight: 700;
    }
  }

  h2 {
    font-family: "IBM Plex Mono";
    font-weight: 700;
    font-size: 30px;

    margin-bottom: 20px;

    margin-top: 50px;

    &:first-of-type {
      margin-top: 0;
    }

    @media (min-width: 1024px) {
      font-size: 48px;
    }
  }
`;

export const TextGroup = styled.div`
  margin-top: 50px;
  &:first-of-type {
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    ///width: 60%;
  }

  p {
    margin-bottom: 10px;
  }
`;
