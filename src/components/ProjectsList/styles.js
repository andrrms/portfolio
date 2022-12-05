import styled from "styled-components";

export const ProjectsListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  column-gap: 30px;
  row-gap: 10px;
`;

export const ProjectCard = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 2px;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.6);
  }

  p {
    margin: 0;
    margin-top: 10px;
    margin-bottom: auto;

    font-size: 1rem;
    line-height: 1.2rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;

  a {
    width: 100%;
    margin-top: 10px;
  }
`;
