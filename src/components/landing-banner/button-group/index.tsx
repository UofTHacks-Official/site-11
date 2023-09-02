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
  const sponsorLink = "mailto:sponsor@uofthacks.com";
  const primaryLink = appsOpen ? "" : sponsorLink;
  // when apps will open, change primaryLink to dashboard link

  const handleButtonClick = (link: string) => {
    window.location.href = link;
  };

  return (
    <ButtonGroupContainer>
      <PrimaryButtonContainer onClick={() => handleButtonClick(primaryLink)}>
        <PrimaryButtonTextContainer>
          <Inter>{appsOpen ? "APPLY" : "INTERESTED IN SPONSORING?"}</Inter>
        </PrimaryButtonTextContainer>
      </PrimaryButtonContainer>
      {appsOpen && (
        <SecondaryButtonContainer
          onClick={() => handleButtonClick(sponsorLink)}
        >
          <SecondaryButtonTextContainer>
            <Inter>SPONSOR</Inter>
          </SecondaryButtonTextContainer>
        </SecondaryButtonContainer>
      )}
    </ButtonGroupContainer>
  );
};

const ButtonGroup = ({ appsOpen }: ButtonProps) => {
  return <ButtonCollection appsOpen={appsOpen} />;
};

export default ButtonGroup;
