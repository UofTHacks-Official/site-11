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
import OrangeDS from "public/assets/landing-banner/ds/orange.png";
import PinkDS from "public/assets/landing-banner/ds/pink.png";
import PurpleDS from "public/assets/landing-banner/ds/purple.png";
import TealDS from "public/assets/landing-banner/ds/teal.png";
import OrangeWii from "public/assets/landing-banner/wii/orange.png";
import PinkWii from "public/assets/landing-banner/wii/pink.png";
import PurpleWii from "public/assets/landing-banner/wii/purple.png";
import TealWii from "public/assets/landing-banner/wii/teal.png";
import OrangeLego from "public/assets/landing-banner/lego/orange.png";
import PinkLego from "public/assets/landing-banner/lego/pink.png";
import PurpleLego from "public/assets/landing-banner/lego/purple.png";
import TealLego from "public/assets/landing-banner/lego/teal.png";
import OrangeCrayon from "public/assets/landing-banner/crayon/orange.png";
import PinkCrayon from "public/assets/landing-banner/crayon/pink.png";
import PurpleCrayon from "public/assets/landing-banner/crayon/purple.png";
import TealCrayon from "public/assets/landing-banner/crayon/teal.png";
import VolunteerBox from "./volunteer-box";

type LandingBannerProps = {
  mainTitle: string;
  subTitle: string;
  subTitle2: string;
  appsOpen: boolean;
};

const imageArray1 = [OrangeCrayon, PinkCrayon, PurpleCrayon, TealCrayon];
const imageArray2 = [PinkDS, TealDS, OrangeDS, PurpleDS];
const imageArray3 = [PurpleWii, OrangeWii, TealWii, PinkWii];
const imageArray4 = [TealLego, PurpleLego, PinkLego, OrangeLego];

const LandingBanner = ({
  mainTitle,
  subTitle,
  subTitle2,
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
      <TitleBox
        mainTitle={mainTitle}
        subTitle={subTitle}
        subTitle2={subTitle2}
      />
      {/* <ButtonGroup appsOpen={appsOpen} /> */}
      {/* <VolunteerBox /> */}
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
