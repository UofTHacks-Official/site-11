import Inter from "@/components/inter";
import Subjectivity from "@/components/subjectivity";
import styled from "styled-components";

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 4rem;
  justify-content: center;
  margin-top: 30%;
  padding: 0 1rem;
  margin-bottom: 5.25rem;
`;

const ColourText = styled.span`
  color: var(--Pink, #f0a0c8);
`;

const StyledSubjectivity = styled(Subjectivity)`
  color: #f9f9f9;
  font-size: 34px;
  letter-spacing: -2px;
`;

const StyledInter = styled(Inter)`
  text-align: left;
  padding: 0.62rem;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export { MobileContainer, ColourText, StyledSubjectivity, StyledInter };
