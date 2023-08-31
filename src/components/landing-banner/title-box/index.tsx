import styled from "styled-components";
import {
  TitleBoxContainer,
  InnerTitleBoxContainer,
  MainTitleContainer,
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
        <MainTitleContainer>
          <Subjectivity mobile={isMobile}>{mainTitle}</Subjectivity>
        </MainTitleContainer>
        <SubTitleContainer>
          <Inter mobile={isMobile}>{subTitle}</Inter>
        </SubTitleContainer>
      </InnerTitleBoxContainer>
    </TitleBoxContainer>
  );
};

export default TitleBox;
