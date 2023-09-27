import styled from "styled-components";
import Subjectivity from "@/components/subjectivity";

const SponsorshipContainer = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ColourText = styled.span`
  color: #a050a0;
`;

const StyledSubjectivity = styled(Subjectivity)`
  color: #f9f9f9;
  font-size: 48px;
  letter-spacing: 0.72px;
  -webkit-text-stroke: 1.7px #282828;
  margin-bottom: 4rem;
`;

export { SponsorshipContainer, ColourText, StyledSubjectivity };
