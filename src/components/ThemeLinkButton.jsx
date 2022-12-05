import styled, { css } from "styled-components";

const ThemeLinkButton = styled.a`
  border-radius: 100px;

  font-family: "IBM Plex Mono";
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;

  padding: 8px 10px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

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

  ${({ small }) =>
    small &&
    css`
      font-size: 1rem;
      padding: 4px 6px;

      gap: 4px;
    `}
`;

export default ThemeLinkButton;
