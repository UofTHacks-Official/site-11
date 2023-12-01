import {
  SponsorshipContainer,
  ColourText,
  StyledSubjectivity,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Sponsors from "@/components/sponsorship";

const Sponsorship = () => {
  return (
    <SponsorshipContainer id="sponsors">
      <StyledSubjectivity>
        Our<ColourText> Sponsors</ColourText>
      </StyledSubjectivity>
      <Sponsors />
    </SponsorshipContainer>
  );
};

export default Sponsorship;
