import styled from "styled-components";

export const SkillsListContainer = styled.ul`
  /* display: flex;
  flex-flow: row wrap;

  gap: 10px;
  column-gap: 20px; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  //gap: 4px;
  column-gap: 40px;
`;
