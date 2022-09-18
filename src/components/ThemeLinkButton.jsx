import styled, { css } from "styled-components";

const ThemeLinkButton = styled.button`
  border-radius: 100px;

  font-family: "IBM Plex Mono";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;

  padding: 8px 10px;

  border: none;
  ${({ primary }) =>
    primary
      ? css`
          background-color: var(--color-yellow-700);
          color: #000;
        `
      : css`
          background-color: transparent;
          border: 2px solid var(--color-orange-500);
          color: var(--color-orange-500);
        `}

  @media (min-width: 1024px) {
    padding: 10px 30px;

    font-size: 20px;
  }
`;

export default ThemeLinkButton;
