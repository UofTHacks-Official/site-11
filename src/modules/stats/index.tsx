import {
  StatsContainer,
  StyledSubjectivity,
  ColourText,
  Container,
  SubContainer,
  StyledImage,
} from "./index.styles";
import StatHacker from "public/assets/stats/Stat_Hacker_500.png";
import StatPrizes from "public/assets/stats/Stat_Prizes.png";
import StatProject from "public/assets/stats/Stat_Project.png";
import StatSchools from "public/assets/stats/Stat_Schools.png";

const Stats = () => {
  return (
    <StatsContainer id="statistics">
      <StyledSubjectivity>
        Last Year’s <ColourText>Statistics</ColourText>
      </StyledSubjectivity>
      <Container>
        <SubContainer>
          <StyledImage src={StatHacker} alt={"Stat Hacker"} />
          <StyledImage src={StatPrizes} alt={"Stat Prizes"} />
        </SubContainer>
        <SubContainer>
          <StyledImage src={StatProject} alt={"Stat Project"} />
          <StyledImage src={StatSchools} alt={"Stat Schools"} />
        </SubContainer>
      </Container>
    </StatsContainer>
  );
};

export default Stats;
