import PolaroidContainer from "../polaroid-container";
import {
  DesktopContainer,
  ColourText,
  LeftContainer,
  RightContainer,
  StyledSubjectivity,
  StyledInter,
} from "./index.styles";

type AboutUsProps = {
  aboutUsHeader: [string, string];
  aboutUsDescription: React.ReactNode;
};

const AboutUsDesktop: React.FC<AboutUsProps> = ({
  aboutUsHeader,
  aboutUsDescription,
}) => {
  return (
    <DesktopContainer>
      <LeftContainer>
        <StyledSubjectivity>
          <ColourText>{aboutUsHeader[0]}</ColourText> {aboutUsHeader[1]}
        </StyledSubjectivity>
        <StyledInter fontStyle={"regular"}>{aboutUsDescription}</StyledInter>
      </LeftContainer>
      <RightContainer>
        <PolaroidContainer />
      </RightContainer>
    </DesktopContainer>
  );
};

export default AboutUsDesktop;
