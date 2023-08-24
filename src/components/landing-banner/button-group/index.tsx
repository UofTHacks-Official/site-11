import styled from "styled-components";
import { ButtonGroupContainer, ButtonContainer } from "./index.styles";

interface ButtonProps {
    section: number;
}

const getButtonColor = (ColourNum: number) => {
    switch (ColourNum) {
      case 1:
        return "#2850A0";
      case 2:
        return "#F0A0C8";
      default:
        return "#282828";
    }
  };


const ButtonGroup = () => {
  return <ButtonGroupContainer>
    <ButtonContainer>Apply</ButtonContainer>
    <ButtonContainer>Sponsor</ButtonContainer>
  </ButtonGroupContainer>
};

export default ButtonGroup;