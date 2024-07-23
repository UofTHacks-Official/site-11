import {
  Container,
  ProjectsContainer,
  StyledSubjectivity,
  StarImage,
} from "./index.styles";
import PastProjects from "@/components/past-projects";
import Star from "public/assets/past-projects/Star5Point.svg";
import Image from "next/image";
import { useMobileDetect } from "@/hooks/useMobileDetect";

const Projects = () => {
  const isMobile = useMobileDetect();

  return (
    <Container>
      <ProjectsContainer id="projects">
        <StyledSubjectivity mobile={isMobile}>Past Projects</StyledSubjectivity>
        <PastProjects />
        <StarImage mobile={isMobile}>
          <Image src={Star} alt="Star" width={100} height={100} />
        </StarImage>
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
