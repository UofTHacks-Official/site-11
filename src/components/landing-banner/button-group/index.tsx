import React from "react";
import Inter from "@/components/inter";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import {
  ButtonGroupContainer,
  PrimaryButtonContainer,
  PrimaryButtonTextContainer,
  SecondaryButtonContainer,
  SecondaryButtonTextContainer,
} from "./index.styles";

interface ButtonProps {
  appsOpen: boolean;
}

const ButtonCollection = ({ appsOpen }: ButtonProps) => {
  const isMobile = useMobileDetect();
  const sponsorLink = "mailto:sponsors@uofthacks.com";
  const portalLink = "https://portal.uofthacks.com";
  const primaryLink = appsOpen ? portalLink : sponsorLink;
  // when apps will open, change primaryLink to dashboard link

  const handleButtonClick = (link: string) => {
    //window.location.href = link;
    window.open(link);
  };

  return (
    <ButtonGroupContainer>
      <PrimaryButtonContainer onClick={() => handleButtonClick(primaryLink)}>
        <PrimaryButtonTextContainer>
          <Inter>{appsOpen ? "LOGIN TO HACKER PORTAL" : "INTERESTED IN SPONSORING?"}</Inter>
        </PrimaryButtonTextContainer>
      </PrimaryButtonContainer>
    </ButtonGroupContainer>
  );
};

const ButtonGroup = ({ appsOpen }: ButtonProps) => {
  return <ButtonCollection appsOpen={appsOpen} />;
};

export default ButtonGroup;
