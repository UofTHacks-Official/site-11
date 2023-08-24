import styled from "styled-components";
import { LandingBannerContainer, QuadrantRowContainer } from "./index.styles";
import Quandrant from "./quadrant";

interface LandingBannerProps {
}

const LandingBanner = () => {
  return (
    <LandingBannerContainer> 
      <QuadrantRowContainer>
        <Quandrant section={1}/>
        <Quandrant section={2}/>
      </QuadrantRowContainer>
      <QuadrantRowContainer >
        <Quandrant section={3}/>
        <Quandrant section={4}/>
      </QuadrantRowContainer >
    </LandingBannerContainer>
  );
};

export default LandingBanner;