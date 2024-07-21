import styled from "styled-components";
import Subjectivity from "@/components/subjectivity";

type StarImageProps = {
  mobile?: boolean;
};

const ProjectsContainer = styled.div`
  position: relative;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-left: 2rem;
  padding-right: 2rem;  
`;

const ColourText = styled.span`
  color: #f0a0c8;
`;

const StyledSubjectivity = styled(Subjectivity)`
  color: #f9f9f9;
  font-size: 48px;
  letter-spacing: 0.72px;
  -webkit-text-stroke: 1.7px #282828;
  margin-bottom: 4rem;
  text-align: left;
  width: 100%;
  padding-left: 8rem;

  @media (max-width: 768px) {
    font-size: 36px;
    text-align: center;
    padding-left: 0rem;
  }
`;

const StarImage = styled.div<StarImageProps>`
  position: absolute;
  bottom: ${(props) => (props.mobile ? "10px" : "-35px")};
  right: ${(props) => (props.mobile ? "10px" : "200px")};
  z-index: 2;
`;

export { ProjectsContainer, ColourText, StyledSubjectivity, StarImage };
