import styled from "styled-components";

const LandingBannerContainer = styled.div`
  align-items: center;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 14px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  margin: 3% 10%;
  min-height: 80%;
  border: 1px solid var(--black, #282828);
`;

const QuadrantRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const QuadrantContainer = styled.div`
  display: grid;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export { LandingBannerContainer, QuadrantContainer, QuadrantRowContainer };
