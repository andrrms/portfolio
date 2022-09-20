import styled from "styled-components";
import ContentContainer from "../../styles/ContentContainer";

export const PolaroidStripesContainer = styled.div`
  position: relative;
  margin-top: calc(42px * 2);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Stripe = styled.div`
  width: 100%;
  height: 42px;
`;

export const YellowStripe = styled(Stripe)`
  background-color: var(--color-yellow-700);
`;

export const OrangeStripe = styled(Stripe)`
  background-color: var(--color-orange-500);
`;

export const RedStripe = styled(Stripe)`
  background-color: var(--color-red-500);
`;

export const WineStripe = styled(Stripe)`
  background-color: var(--color-red-300);
`;

export const StripesContent = styled(ContentContainer)`
  position: absolute;
  top: -50%;

  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    margin-top: 0;
    top: -75%;

    height: fit-content;

    justify-content: flex-start;
  }
`;

export const PolaroidLink = styled.a`
  color: #000;

  text-decoration: none;

  position: relative;

  &::before {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: #000;
  }
`;
