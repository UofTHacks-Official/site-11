import { TitleBoxContainer, ShiftedContainer } from "./index.styles";
import React from "react";
import Subjectivity from "@/components/subjectivity";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import InterSemiBold from "@/components/inter-semi-bold";

interface TitleBoxProps {
  mainTitle: string;
  subTitle: string;
  subTitle2: string;
}

const TitleBox = ({ mainTitle, subTitle, subTitle2 }: TitleBoxProps) => {
  const isMobile = useMobileDetect();

  const subjectivityStyle = {
    color: "var(--Purple, #A050A0)",
  };

  return (
    <TitleBoxContainer mobile={isMobile}>
      <Subjectivity style={subjectivityStyle}>
        {mainTitle.slice(0, 2)}
        <ShiftedContainer>{mainTitle[2]}</ShiftedContainer>
        {mainTitle.slice(3)}
      </Subjectivity>
      <InterSemiBold>{subTitle}</InterSemiBold>
      <InterSemiBold>{subTitle2}</InterSemiBold>
    </TitleBoxContainer>
  );
};

export default TitleBox;
