import { FiGlobe, FiGithub } from "react-icons/fi";

import ThemeLinkButton from "../ThemeLinkButton";

import projects from "../../data/projects";
import { ButtonGroup, ProjectCard, ProjectsListContainer } from "./styles";

export default function ProjectsList() {
  return (
    <ProjectsListContainer>
      {projects.map((project) => (
        <ProjectCard key={project.id}>
          <h3>{project.name}</h3>
          <span>{project.type}</span>
          <p>{project.description}</p>
          <ButtonGroup>
            {project.repo && (
              <ThemeLinkButton small href={project.repo} target="_blank">
                <FiGithub /> GitHub
              </ThemeLinkButton>
            )}
            {project.url && (
              <ThemeLinkButton small href={project.url} target="_blank">
                <FiGlobe /> Deploy
              </ThemeLinkButton>
            )}
          </ButtonGroup>
        </ProjectCard>
      ))}
    </ProjectsListContainer>
  );
}
