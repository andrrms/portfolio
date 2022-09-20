import styled from "styled-components";

import ContentContainer from "../../styles/ContentContainer";
import ActionButton from "../ActionButton";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;

  position: fixed;
  top: 0;

  z-index: 5000;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background-color: ${({ primary }) =>
    primary ? "var(--color-blue-55-transparent)" : "rgba(0, 0, 0, 0.75)"};
  backdrop-filter: blur(20px);

  transition: 0.1s ease background-color;
`;

export const NavbarContent = styled(ContentContainer)`
  display: flex;
  align-items: center;
`;

export const NavButton = styled(ActionButton)`
  color: #fff;
  font-size: 25px;

  width: fit-content;
  height: fit-content;

  display: inline-flex;
`;

export const LinksList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const SmoothAnchor = styled.a`
  font-family: "IBM Plex Mono";
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;

  color: #fff;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;

    width: 0;
    height: 2px;

    background-color: #fff;

    transition: 0.2s ease;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`;
