import {
  SponsorshipContainer,
  ColourText,
  StyledSubjectivity,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Sponsors from "@/components/sponsorship";

const Sponsorship = () => {
  return (
    <SponsorshipContainer>
      <StyledSubjectivity>
        Previous<ColourText> Sponsors</ColourText>
      </StyledSubjectivity>
      <Sponsors />
    </SponsorshipContainer>
  );
};

export default Sponsorship;
