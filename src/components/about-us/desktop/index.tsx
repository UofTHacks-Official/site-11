import Polaroid from "../polaroids";
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
        <Polaroid
          imageUrl={"/stars/star4.png"}
          rotation={10}
          borderColor={"#A050A0"}
          stickers={[
            {
              imageUrl: "/stars/star12.png",
              x: "-5%", // move left-right
              y: "-5%", // move top-bottom
              size: "40px",
              zIndex: 2,
              opacity: 0.5,
            },
          ]}
        />
        <Polaroid
          imageUrl={"/stars/star5.png"}
          borderColor={"#2850A0"}
          zIndex={2}
        />
        <Polaroid
          imageUrl={"/stars/star6.png"}
          rotation={20}
          borderColor={"#F0A000"}
        />
      </RightContainer>
    </DesktopContainer>
  );
};

export default AboutUsDesktop;
