import PolaroidContainer from "../polaroid-container";
import {
  MobileContainer,
  ColourText,
  StyledSubjectivity,
  StyledInter,
} from "./index.styles";

type AboutUsProps = {
  aboutUsHeader: [string, string];
  aboutUsDescription: React.ReactNode;
};

const AboutUsMobile: React.FC<AboutUsProps> = ({
  aboutUsHeader,
  aboutUsDescription,
}) => {
  return (
    <MobileContainer>
      <StyledSubjectivity>
        <ColourText>{aboutUsHeader[0]}</ColourText> {aboutUsHeader[1]}
      </StyledSubjectivity>
      <PolaroidContainer />
      <StyledInter>{aboutUsDescription}</StyledInter>
    </MobileContainer>
  );
};

export default AboutUsMobile;
