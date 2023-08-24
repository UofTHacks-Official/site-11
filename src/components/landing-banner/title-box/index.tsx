import styled from "styled-components";
import { TitleBoxContainer, MainTitleContainer, SubTitleContainer } from "./index.styles";

interface TitleBoxProps {
    mainTitle: string;
    subTitle: string;
}

const TitleBox = ({ mainTitle, subTitle }: TitleBoxProps) => {
  return <TitleBoxContainer>
    <MainTitleContainer>
      { mainTitle }
    </MainTitleContainer>
    <SubTitleContainer>
      { subTitle }
    </SubTitleContainer>
  </TitleBoxContainer>
};

export default TitleBox;