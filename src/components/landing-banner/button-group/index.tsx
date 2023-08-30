import {
  ButtonGroupContainer,
  PrimaryButtonContainer,
  PrimaryButtonTextContainer,
  SecondaryButtonContainer,
  SecondaryButtonTextContainer,
} from "./index.styles";
import React from "react";
import Inter from "@/components/inter";

interface ButtonProps {
  appsOpen: boolean;
}

const ButtonCollection = ({ appsOpen }: ButtonProps) => {
  if (appsOpen == true) {
    return (
      <ButtonGroupContainer>
        <PrimaryButtonContainer>
          <PrimaryButtonTextContainer>
            <Inter>Apply</Inter>
          </PrimaryButtonTextContainer>
        </PrimaryButtonContainer>
        <SecondaryButtonContainer>
          <SecondaryButtonTextContainer>
            <Inter>Sponsor</Inter>
          </SecondaryButtonTextContainer>
        </SecondaryButtonContainer>
      </ButtonGroupContainer>
    );
  } else {
    return (
      <ButtonGroupContainer>
        <PrimaryButtonContainer>
          <PrimaryButtonTextContainer>
            <Inter>INTERESTED IN SPONSORING?</Inter>
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
