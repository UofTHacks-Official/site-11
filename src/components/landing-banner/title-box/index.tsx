import { TitleBoxContainer, ShiftedContainer } from "./index.styles";
import React from "react";
import Subjectivity from "@/components/subjectivity";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import InterSemiBold from "@/components/inter-semi-bold";

interface TitleBoxProps {
  mainTitle: string;
  subTitle: string;
}

const TitleBox = ({ mainTitle, subTitle }: TitleBoxProps) => {
  const isMobile = useMobileDetect();
  const fontSize = isMobile ? "12vw" : "96px";
  const minFontSize = "48px";

  return (
    <TitleBoxContainer mobile={isMobile}>
      <Subjectivity
        style={{
          fontSize: `max(${fontSize}, ${minFontSize})`,
        }}
      >
        {mainTitle.slice(0, 2)}
        <ShiftedContainer>{mainTitle[2]}</ShiftedContainer>
        {mainTitle.slice(3)}
      </Subjectivity>
      <InterSemiBold>{subTitle}</InterSemiBold>
    </TitleBoxContainer>
  );
};

export default TitleBox;
