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

  return (
    <TitleBoxContainer mobile={isMobile}>
      <Subjectivity>
        {mainTitle.slice(0, 2)}
        <ShiftedContainer>{mainTitle[2]}</ShiftedContainer>
        {mainTitle.slice(3)}
      </Subjectivity>
      <InterSemiBold>{subTitle}</InterSemiBold>
    </TitleBoxContainer>
  );
};

export default TitleBox;
