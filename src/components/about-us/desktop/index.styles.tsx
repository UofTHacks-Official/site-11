import Inter from "@/components/inter";
import Subjectivity from "@/components/subjectivity";
import styled from "styled-components";

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7.25rem 6.25rem;
  gap: 1.25rem;
  flex: 1;
`;

const ColourText = styled.span`
  color: var(--Pink, #f0a0c8);
`;

const StyledSubjectivity = styled(Subjectivity)`
  margin-bottom: 1.25rem;
  color: #f9f9f9;
  font-size: 48px;
  letter-spacing: -4px;
  text-align: left;
  padding: 0.62rem;
`;

const StyledInter = styled(Inter)`
  text-align: left;
  font-size: 16px;
  padding: 0.62rem;
  color: #000;
  font-style: normal;
  font-weight: 400;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.25;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export {
  DesktopContainer,
  ColourText,
  LeftContainer,
  RightContainer,
  StyledSubjectivity,
  StyledInter,
};
