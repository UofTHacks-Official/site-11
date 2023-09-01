import styled from "styled-components";
import { useMobileDetect } from "@/hooks/useMobileDetect";

type LandingBannerProps = {
  mobile?: boolean;
};

const LandingBannerContainer = styled.div<LandingBannerProps>`
  align-items: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 100px 10%;
  min-height: 680px;
  border: 1px solid var(--black, #282828);
  ${(props) =>
    props.mobile
      ? `
    margin: 100px 0;
    border-radius: 0;
  `
      : `
    margin: 100px 10%;
    border-radius: 25px;
  `}
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