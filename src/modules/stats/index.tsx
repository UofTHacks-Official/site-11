import { useMobileDetect } from "@/hooks/useMobileDetect";
import {
  StatsContainer,
  Wrapper,
  StatsPhoto,
  BoxContainer,
  StickerContainer,
  StyledInter,
  StyledSubjectivity,
  ColourText,
} from "./index.styles";

const Stats = () => {
  const isMobile = useMobileDetect();

  return (
    <StatsContainer>
      <StyledSubjectivity>
        Last Year’s <ColourText>Statistics</ColourText>
      </StyledSubjectivity>
      <Wrapper mobile={isMobile}>
        <StatsPhoto mobile={isMobile}>
          <BoxContainer backgroundColor={"#f0a0c8"}>
            <StickerContainer
              backgroundColor={"#007D7D"}
              x={isMobile ? "10%" : "30%"}
              y={"85%"}
              rotate={-14}
              size="17rem"
            >
              <StyledInter fontStyle={"semibold"} color={"#F9F9F9"}>
                90+ Projects
              </StyledInter>
            </StickerContainer>
          </BoxContainer>
        </StatsPhoto>
        <StatsPhoto mobile={isMobile} right>
          <BoxContainer backgroundColor={"#a050a0"}>
            <StickerContainer
              backgroundColor={"#F0C800"}
              x={isMobile ? "10%" : "30%"}
              y={"90%"}
              rotate={7.5}
              size="17rem"
            >
              <StyledInter fontStyle={"semibold"} color={"#282828"}>
                25+ Schools
              </StyledInter>
            </StickerContainer>
          </BoxContainer>
        </StatsPhoto>
        <StatsPhoto mobile={isMobile} justifyLeft>
          <BoxContainer backgroundColor={"#2850A0"}>
            <StickerContainer
              backgroundColor={"#F0A000"}
              x={isMobile ? "10%" : "-20%"}
              y={"90%"}
              rotate={isMobile ? 0 : 11.3}
              size="17rem"
            >
              <StyledInter fontStyle={"semibold"} color={"#282828"}>
                $18k+ in Prizes
              </StyledInter>
            </StickerContainer>
          </BoxContainer>
        </StatsPhoto>
        <StatsPhoto mobile={isMobile} right justifyLeft>
          <BoxContainer backgroundColor={"#F0A000"}>
            <StickerContainer
              backgroundColor={"#A050A0"}
              x={"10%"}
              y={"95%"}
              rotate={-6}
              size="17rem"
            >
              <StyledInter fontStyle={"semibold"} color={"#F9F9F9"}>
                600+ Hackers
              </StyledInter>
            </StickerContainer>
          </BoxContainer>
        </StatsPhoto>
      </Wrapper>
    </StatsContainer>
  );
};

export default Stats;
