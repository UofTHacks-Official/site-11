import {
  ProjectsContainer,
  ColourText,
  StyledSubjectivity,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import PastProjects from "@/components/past-projects";

const Projects = () => {
  const isMobile = useMobileDetect();

  return (
    <ProjectsContainer id="projects">
      <StyledSubjectivity>
        <ColourText>Past Projects</ColourText>
      </StyledSubjectivity>
      <PastProjects />
    </ProjectsContainer>
  );
};

export default Projects;
