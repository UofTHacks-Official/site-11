import { LandingBannerContainer, QuadrantContainer, QuadrantRowContainer } from "./index.styles";
import Quandrant from "./quadrant";
import TitleBox from "./title-box";
import ButtonGroup from "./button-group";
import React from "react";

interface LandingBannerProps {
  mainTitle: string
  subTitle: string
  appsOpen: boolean
}

const LandingBanner = ({ mainTitle, subTitle, appsOpen }: LandingBannerProps) => {
  return (
    <LandingBannerContainer>
      <QuadrantContainer>
        <QuadrantRowContainer>
          <Quandrant section={1} />
          <Quandrant section={2} />
        </QuadrantRowContainer>
        <QuadrantRowContainer >
          <Quandrant section={3} />
          <Quandrant section={4} />
        </QuadrantRowContainer >
      </QuadrantContainer>
      <TitleBox mainTitle={mainTitle} subTitle={subTitle} />
      <ButtonGroup appsOpen={appsOpen} />
    </LandingBannerContainer>
  );
};

export default LandingBanner;