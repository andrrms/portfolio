import styled from "styled-components";

const AnchorPoint = styled.span`
  position: absolute;
  top: -70px;
`;

const TitleH2 = styled.h2`
  position: relative;

  color: inherit;

  font-family: "IBM Plex Mono";
  font-size: 30px;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

export default function AnchorTitle({ children, anchor, tabIndex }) {
  return (
    <TitleH2 tabIndex={tabIndex}>
      <AnchorPoint id={anchor} />
      {children}
    </TitleH2>
  );
}
