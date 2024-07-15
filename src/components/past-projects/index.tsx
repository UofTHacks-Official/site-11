// components/past-projects/index.tsx
import React from "react";
import { StaticImageData } from "next/image";
import {
  Wrapper,
  ProjectsGrid,
  ProjectItem,
  StyledImage,
  Row,
  Column,
  SubtitleBox,
  StyledInter,
  StyledInterSemiBold,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import { projectData } from "@/components/past-projects/project-data";
import { StyledSubjectivity } from "../about-us/desktop/index.styles";

// Project Item component
const Project: React.FC<{
  href: string;
  src: StaticImageData;
  name: string;
  description: string;
  isSpecial?: boolean;
  customClass?: string;
}> = ({ href, src, name, description, customClass, isSpecial }) => {
  const isMobile = useMobileDetect();
  return (
    <ProjectItem href={href} target="_blank" rel="noopener">
      <StyledImage
        src={src}
        alt={name}
        layout="responsive"
        mobile={isMobile}
        isSpecial={isSpecial}
        className={isSpecial ? "special-logo" : ""}
      />
      
      <SubtitleBox>
        <StyledInterSemiBold>{name}</StyledInterSemiBold> 
        <StyledInter>{description}</StyledInter>
      </SubtitleBox>

    </ProjectItem>
  );
};

// Page component
const PastProjects: React.FC = () => {
  const isMobile = useMobileDetect();
  return (
    <Wrapper id="Sponsors">
      <ProjectsGrid mobile={isMobile}>
        <Row>
          {projectData.tier1.map((s, index) => (
            <Column key={index}>
              <Project
                href={s.url}
                src={s.img}
                name={s.name}
                key={index}
                description={s.description}
                customClass="special-logo"
                isSpecial={s.isSpecial}
              />
            </Column>
          ))}
        </Row>
        <Row>
          {projectData.tier2.map((s, index) => (
            <Column key={index} thirdRow>
              <Project
                href={s.url}
                src={s.img}
                name={s.name}
                key={index}
                customClass="special-logo"
                description={s.description}
                isSpecial={s.isSpecial}
              />
            </Column>
          ))}
        </Row>
      </ProjectsGrid>
    </Wrapper>
  );
};

export default PastProjects;
