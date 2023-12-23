import React from "react";
import Inter from "@/components/inter";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import {
  PushDownContainer,
  PrimaryButtonContainer,
  PrimaryButtonTextContainer,
  VolunteerBoxContainer,
  ButtonGroupContainer,
  TextPromptContainer,
} from "./index.styles";
import InterSemiBold from "@/components/inter-semi-bold";

const VolunteerBoxComponent = () => {
  const isMobile = useMobileDetect();

  // TODO update the application links here
  const volunteerLink = "https://forms.gle/wRWAY8nNB9RiTGe5A";
  const mentorLink = "https://forms.gle/5ZKSXZ7r2p4wXTva6";
  // when apps will open, change primaryLink to dashboard link

  const handleButtonClick = (link: string) => {
    //window.location.href = link;
    window.open(link);
  };

  const interStyles = (isMobile: any) => ({
    fontSize: isMobile ? "12px" : "15px",
    display: "inline",
  });

  return (
    <PushDownContainer>
      <VolunteerBoxContainer mobile={isMobile}>
        <TextPromptContainer>
          <Inter style={interStyles(isMobile)}>
            Applications for{" "}
            <InterSemiBold style={interStyles(isMobile)}>
              Volunteers
            </InterSemiBold>{" "}
            &{" "}
            <InterSemiBold style={interStyles(isMobile)}>Mentors</InterSemiBold>{" "}
            are now open! Click below to apply:
          </Inter>
        </TextPromptContainer>

        <ButtonGroupContainer>
          <PrimaryButtonContainer
            onClick={() => handleButtonClick(volunteerLink)}
          >
            <PrimaryButtonTextContainer>
              <Inter style={interStyles(isMobile)}>VOLUNTEER</Inter>
            </PrimaryButtonTextContainer>
          </PrimaryButtonContainer>
          <PrimaryButtonContainer onClick={() => handleButtonClick(mentorLink)}>
            <PrimaryButtonTextContainer>
              <Inter style={interStyles(isMobile)}>MENTOR</Inter>
            </PrimaryButtonTextContainer>
          </PrimaryButtonContainer>
        </ButtonGroupContainer>
      </VolunteerBoxContainer>
    </PushDownContainer>
  );
};

const VolunteerBox = () => {
  return <VolunteerBoxComponent />;
};

export default VolunteerBox;
