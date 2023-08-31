import {
  ButtonGroupContainer,
  PrimaryButtonContainer,
  PrimaryButtonTextContainer,
  SecondaryButtonContainer,
  SecondaryButtonTextContainer,
} from "./index.styles";
import React from "react";
import Inter from "@/components/inter";
import { useMobileDetect } from "@/hooks/useMobileDetect";

interface ButtonProps {
  appsOpen: boolean;
}

const ButtonCollection = ({ appsOpen }: ButtonProps) => {
  const isMobile = useMobileDetect();
  if (appsOpen == true) {
    return (
      <ButtonGroupContainer>
        <PrimaryButtonContainer>
          <PrimaryButtonTextContainer>
            <Inter mobile={isMobile}>Apply</Inter>
          </PrimaryButtonTextContainer>
        </PrimaryButtonContainer>
        <SecondaryButtonContainer>
          <SecondaryButtonTextContainer>
            <Inter mobile={isMobile}>Sponsor</Inter>
          </SecondaryButtonTextContainer>
        </SecondaryButtonContainer>
      </ButtonGroupContainer>
    );
  } else {
    return (
      <ButtonGroupContainer>
        <PrimaryButtonContainer>
          <PrimaryButtonTextContainer>
            <Inter mobile={isMobile}>INTERESTED IN SPONSORING?</Inter>
          </PrimaryButtonTextContainer>
        </PrimaryButtonContainer>
      </ButtonGroupContainer>
    );
  }
};

const ButtonGroup = ({ appsOpen }: ButtonProps) => {
  return <ButtonCollection appsOpen={appsOpen} />;
};

export default ButtonGroup;
