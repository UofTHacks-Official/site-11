import { ButtonGroupContainer, PrimaryButtonContainer, PrimaryButtonTextContainer, SecondaryButtonContainer, SecondaryButtonTextContainer } from "./index.styles";
import React from "react";

interface ButtonProps {
  appsOpen: boolean;
}

const ButtonCollection = ({ appsOpen }: ButtonProps) => {
  if (appsOpen == true) {
    return <ButtonGroupContainer>
      <PrimaryButtonContainer>
        <PrimaryButtonTextContainer>Apply</PrimaryButtonTextContainer>
      </PrimaryButtonContainer>
      <SecondaryButtonContainer>
        <SecondaryButtonTextContainer>Sponsor</SecondaryButtonTextContainer>
      </SecondaryButtonContainer>
    </ButtonGroupContainer>
  } else {
    return <ButtonGroupContainer>
      <PrimaryButtonContainer>
        <PrimaryButtonTextContainer>INTERESTED IN SPONSORING?</PrimaryButtonTextContainer>
      </PrimaryButtonContainer>
    </ButtonGroupContainer>
  }
}

const ButtonGroup = ({ appsOpen }: ButtonProps) => {
  return <ButtonCollection appsOpen={appsOpen} />
};

export default ButtonGroup;