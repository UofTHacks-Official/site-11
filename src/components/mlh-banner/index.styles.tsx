import styled from "styled-components";

type MLHContainerProps = {
  isMobile?: boolean | null;
};
const MLHContainer = styled.a<MLHContainerProps>`
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: ${(props) => (props.isMobile ? "11%" : "1%")};
  top: 0;
  width: 10%;
  z-index: 10000;
`;

const MLHWrapper = styled.svg`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url("/mlh.svg");
`;

export { MLHContainer, MLHWrapper };
