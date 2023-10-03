import { LandingBannerContainer, Quadrant } from "./index.styles";
import TitleBox from "./title-box";
import ButtonGroup from "./button-group";
import React from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import ImageCarousel from "./image-carousel";
import Green from "public/green.png";
import Yellow from "public/yellow.png";
import Purple from "public/purple.png";
import Pink from "public/pink.png";

type LandingBannerProps = {
  mainTitle: string;
  subTitle: string;
  appsOpen: boolean;
};

const imageArray1 = [Green, Purple, Yellow, Pink];
const imageArray2 = [Pink, Green, Purple, Yellow];
const imageArray3 = [Purple, Yellow, Pink, Green];
const imageArray4 = [Yellow, Pink, Green, Purple];

const LandingBanner = ({
  mainTitle,
  subTitle,
  appsOpen,
}: LandingBannerProps) => {
  const isMobile = useMobileDetect();
  const interval = 2000;

  return (
    <LandingBannerContainer mobile={isMobile}>
      <Quadrant>
        <ImageCarousel images={imageArray1} interval={interval} />
      </Quadrant>
      <Quadrant>
        <ImageCarousel images={imageArray2} interval={interval} />
      </Quadrant>
      <Quadrant>
        <ImageCarousel images={imageArray3} interval={interval} />
      </Quadrant>
      <Quadrant>
        <ImageCarousel images={imageArray4} interval={interval} />
      </Quadrant>
      <TitleBox mainTitle={mainTitle} subTitle={subTitle} />
      <ButtonGroup appsOpen={appsOpen} />
    </LandingBannerContainer>
  );
};

export default LandingBanner;
