import {
  TitleBoxContainer,
  InnerTitleBoxContainer,
  ShiftedContainer,
  SubTitleContainer,
} from "./index.styles";
import React from "react";
import Inter from "@/components/inter";
import Subjectivity from "@/components/subjectivity";
import { useMobileDetect } from "@/hooks/useMobileDetect";

interface TitleBoxProps {
  mainTitle: string;
  subTitle: string;
}

const TitleBox = ({ mainTitle, subTitle }: TitleBoxProps) => {
  const isMobile = useMobileDetect();
  return (
    <TitleBoxContainer mobile={isMobile}>
      <InnerTitleBoxContainer mobile={isMobile}>
        <Subjectivity>
          {mainTitle.slice(0, 2)}
          <ShiftedContainer>{mainTitle[2]}</ShiftedContainer>
          {mainTitle.slice(3)}
        </Subjectivity>
        <SubTitleContainer>
          <Inter>{subTitle}</Inter>
        </SubTitleContainer>
      </InnerTitleBoxContainer>
    </TitleBoxContainer>
  );
};

export default TitleBox;
