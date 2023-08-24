import styled from "styled-components";

const LandingBannerContainer = styled.div`
  display: grid;
  flex-direction: column;
  color: black;
  font-size: 14px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  margin: 3% 10%;
  min-height: 70%;
`;

const QuadrantRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export { LandingBannerContainer, QuadrantRowContainer };
