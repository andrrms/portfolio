import styled from "styled-components";

const AnchorPoint = styled.span`
  position: absolute;
  top: -70px;
`;

const title = (type) => styled[type]`
  position: relative;

  color: inherit;

  font-family: "IBM Plex Mono";
  font-size: 30px;

  @media (min-width: 1024px) {
    font-size: 48px;
  }
`;

export default function AnchorTitle({ children, anchor, component = "h2" }) {
  const TitleComponent = title(component);

  return (
    <TitleComponent>
      <AnchorPoint id={anchor} />
      {children}
    </TitleComponent>
  );
}
