import styled from "styled-components";
import { TitleBoxContainer, InnerTitleBoxContainer, MainTitleContainer, SubTitleContainer } from "./index.styles";

interface TitleBoxProps {
    mainTitle: string;
    subTitle: string;
}

const TitleBox = ({ mainTitle, subTitle }: TitleBoxProps) => {
  return <TitleBoxContainer>
    <InnerTitleBoxContainer>
      <MainTitleContainer>
        { mainTitle }
      </MainTitleContainer>
      <SubTitleContainer>
        { subTitle }
      </SubTitleContainer>
    </InnerTitleBoxContainer>
  </TitleBoxContainer>
};

export default TitleBox;