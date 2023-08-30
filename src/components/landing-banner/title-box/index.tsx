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

interface TitleBoxProps {
  mainTitle: string;
  subTitle: string;
}

const TitleBox = ({ mainTitle, subTitle }: TitleBoxProps) => {
  return (
    <TitleBoxContainer>
      <InnerTitleBoxContainer>
        <MainTitleContainer>
          <Subjectivity>{mainTitle}</Subjectivity>
        </MainTitleContainer>
        <SubTitleContainer>
          <Inter>{subTitle}</Inter>
        </SubTitleContainer>
      </InnerTitleBoxContainer>
    </TitleBoxContainer>
  );
};

export default TitleBox;
