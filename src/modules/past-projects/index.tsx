import {
  ProjectsContainer,
  ColourText,
  StyledSubjectivity,
  StarImage
} from "./index.styles";
import PastProjects from "@/components/past-projects";
import Star from "public/assets/past-projects/Star5Point.svg";
import Image from "next/image";
import { useMobileDetect } from "@/hooks/useMobileDetect";

const Projects = () => {
  const isMobile = useMobileDetect();

  return (
    <ProjectsContainer id="projects">
      <StyledSubjectivity>
        <ColourText>Past Projects</ColourText>
      </StyledSubjectivity>
      <PastProjects />
      <StarImage mobile={isMobile}>
        <Image src={Star} alt="Star" width={100} height={100} />
      </StarImage>
    </ProjectsContainer>
  );
};

export default Projects;
