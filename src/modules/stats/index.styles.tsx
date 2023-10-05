import styled from "styled-components";
import Subjectivity from "@/components/subjectivity";
import Image from "next/image";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`;

const StyledSubjectivity = styled(Subjectivity)`
  color: #f9f9f9;
  font-size: 48px;
  letter-spacing: 0.72px;
  -webkit-text-stroke: 1.7px #282828;
  margin-bottom: 4rem;
`;

const ColourText = styled.span`
  color: #007d7d;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 1000px;
  align-self: center;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
`;

export {
  StatsContainer,
  StyledSubjectivity,
  ColourText,
  Container,
  SubContainer,
  StyledImage,
};
