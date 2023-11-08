import {
  LandingBannerContainer,
  Quadrant,
  SponsorshipLinkContainer,
} from "./index.styles";
import TitleBox from "./title-box";
import ButtonGroup from "./button-group";
import React from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Inter from "../inter";
import ImageCarousel from "./image-carousel";
import Green from "public/assets/landing-banner/landing_rect_4.png";
import Yellow from "public/assets/landing-banner/landing_rect_1.png";
import Purple from "public/assets/landing-banner/landing_rect_2.png";
import Pink from "public/assets/landing-banner/landing_rect_3.png";

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
  const sponsorLink = "mailto:sponsors@uofthacks.com";
  const interval = 2000;
  const isMobile = useMobileDetect();

  const handleButtonClick = () => {
    window.location.href = sponsorLink;
  };

  const interCustomStyles = {
    color: "var(--Blue, #2850A0)",
    textAlign: "right",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    textDecoration: "underline",
    verticalAlign: "baseline",
    lineHeight: "normal",
    marginTop: "15px",
    cursor: "pointer",
  };

  const borderRadiusStyle = (corner: string) => {
    const radius = "25px";
    switch (corner) {
      case "topleft":
        return { borderTopLeftRadius: radius };
      case "topright":
        return { borderTopRightRadius: radius };
      case "bottomleft":
        return { borderBottomLeftRadius: radius };
      case "bottomright":
        return { borderBottomRightRadius: radius };
      default:
        return {};
    }
  };

  return (
    <LandingBannerContainer mobile={isMobile}>
      <Quadrant style={borderRadiusStyle(isMobile ? "" : "topleft")}>
        <ImageCarousel images={imageArray1} interval={interval} />
      </Quadrant>
      <Quadrant style={borderRadiusStyle(isMobile ? "" : "topright")}>
        <ImageCarousel images={imageArray2} interval={interval} />
      </Quadrant>
      <Quadrant style={borderRadiusStyle(isMobile ? "" : "bottomleft")}>
        <ImageCarousel images={imageArray3} interval={interval} />
      </Quadrant>
      <Quadrant style={borderRadiusStyle(isMobile ? "" : "bottomright")}>
        <ImageCarousel images={imageArray4} interval={interval} />
      </Quadrant>
      <TitleBox mainTitle={mainTitle} subTitle={subTitle} />
      <ButtonGroup appsOpen={appsOpen} />
      <SponsorshipLinkContainer
        mobile={isMobile}
        onClick={() => handleButtonClick()}
      >
        <Inter style={interCustomStyles}>Interested in Sponsoring?</Inter>
      </SponsorshipLinkContainer>
    </LandingBannerContainer>
  );
};

export default LandingBanner;
