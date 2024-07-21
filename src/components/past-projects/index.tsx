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
  Tier1,
  Tier2,
  StyledInter,
  StyledInterSemiBold,
  StyledDecalImage,
  SubtitleLink,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import { projectData } from "@/components/past-projects/project-data";

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
      <StyledImage src={src} alt={name} mobile={isMobile} />
    </ProjectItem>
  );
};

// Page component
const PastProjects: React.FC = () => {
  const isMobile = useMobileDetect();
  return (
    <Wrapper id="Sponsors">
      <ProjectsGrid mobile={isMobile}>
        <Row mobile={isMobile}>
          {projectData.tier1.map((s, index) => (
            <Column key={index} mobile={isMobile}>
              <StyledDecalImage src={s.decal} alt={"Star1"} mobile={isMobile} />
              <Project
                href={s.url}
                src={s.img}
                name={s.name}
                key={index}
                description={s.description}
                customClass="special-logo"
                isSpecial={s.isSpecial}
              />
              <SubtitleLink href={s.url} target="_blank" rel="noopener">
                <SubtitleBox mobile={isMobile}>
                  <Tier1>
                    <StyledInterSemiBold mobile={isMobile}>
                      {s.name}
                    </StyledInterSemiBold>
                    <StyledInter>
                      Project {s.name}
                      <br />
                      {s.description}
                    </StyledInter>
                  </Tier1>
                </SubtitleBox>
              </SubtitleLink>
            </Column>
          ))}
        </Row>
        <Row mobile={isMobile}>
          {projectData.tier2.map((s, index) => (
            <Column key={index} thirdRow mobile={isMobile}>
              <Project
                href={s.url}
                src={s.img}
                name={s.name}
                key={index}
                customClass="special-logo"
                description={s.description}
                isSpecial={s.isSpecial}
              />
              <SubtitleLink href={s.url} target="_blank" rel="noopener">
                <SubtitleBox mobile={isMobile}>
                  <Tier2 mobile={isMobile}>
                    <StyledInterSemiBold mobile={isMobile}>
                      {s.name}
                    </StyledInterSemiBold>
                    <StyledInter>{s.description}</StyledInter>
                  </Tier2>
                </SubtitleBox>
              </SubtitleLink>
            </Column>
          ))}
        </Row>
      </ProjectsGrid>
    </Wrapper>
  );
};

export default PastProjects;
