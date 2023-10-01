import {
  LandingBannerContainer,
  Quadrant,
  ImageInQuadrant,
} from "./index.styles";
import Quandrant from "./quadrant";
import TitleBox from "./title-box";
import ButtonGroup from "./button-group";
import React from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Polaroid1 from "public/assets/polaroid/polaroid1.jpg";
import Polaroid3 from "public/assets/polaroid/polaroid3.jpg";
import ImageCarousel from "./image-carousel";

type LandingBannerProps = {
  mainTitle: string;
  subTitle: string;
  appsOpen: boolean;
};

const imageArray = [Polaroid1, Polaroid3];

const LandingBanner = ({
  mainTitle,
  subTitle,
  appsOpen,
}: LandingBannerProps) => {
  const isMobile = useMobileDetect();

  return (
    <LandingBannerContainer mobile={isMobile}>
      <Quadrant>
        <ImageCarousel images={imageArray} interval={5000} />
      </Quadrant>
      <Quadrant>
        <ImageInQuadrant src={Polaroid1} alt="Image 1" />
      </Quadrant>
      <Quadrant>
        <ImageInQuadrant src={Polaroid1} alt="Image 1" />
      </Quadrant>
      <Quadrant>
        <ImageInQuadrant src={Polaroid1} alt="Image 1" />
      </Quadrant>
      <TitleBox mainTitle={mainTitle} subTitle={subTitle} />
      <ButtonGroup appsOpen={appsOpen} />
    </LandingBannerContainer>
  );
};

export default LandingBanner;
