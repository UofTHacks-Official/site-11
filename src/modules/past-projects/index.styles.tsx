import styled from "styled-components";
import Subjectivity from "@/components/subjectivity";

type MobileProps = {
  mobile?: boolean;
};

const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 2rem;
  padding-right: 2rem;  
`;

const ProjectsContainer = styled.div`
  position: relative;
  flex-direction: column;
  max-width: 1240px;
`;

const StyledSubjectivity = styled(Subjectivity)<MobileProps>`
  color: #f9f9f9;
  font-size: ${(props) => (props.mobile ? "36px" : "48px")};
  letter-spacing: 0.72px;
  -webkit-text-stroke: 1.7px #282828;
  margin-bottom: 4rem;
  text-align: ${(props) => (props.mobile ? "center" : "left")};
  width: 100%;
  margin-left: ${(props) => (props.mobile ? "0rem" : "2.75rem")};
  color: #f0a0c8;
`;

const StarImage = styled.div<MobileProps>`
  position: absolute;
  bottom: ${(props) => (props.mobile ? "10px" : "-35px")};
  right: ${(props) => (props.mobile ? "10px" : "200px")};
  z-index: 2;
`;

export { Container, ProjectsContainer, StyledSubjectivity, StarImage };
