import styled, { css } from "styled-components";
import React, { ReactNode } from "react";

type CardContainerProps = {
  mobile?: boolean | null;
  borderColourIndex?: number | null;
};

const getBorderColour = (colourIndex: number) => {
  let borderColor = "";

  switch (colourIndex) {
    case 0:
    case 6:
    case 7:
      borderColor = "4px solid var(--Teal, #007d7d)";
      break;
    case 1:
    case 5:
    case 8:
      borderColor = "4px solid var(--Orange, #F0A000)";
      break;
    case 2:
    case 11:
      borderColor = "4px solid var(--Pink, #F0A0C8)";
      break;
    case 3:
      borderColor = "4px solid var(--Blue, #2850A0)";
      break;
    case 4:
    case 7:
    case 9:
      borderColor = "4px solid var(--Blue, #2850A0)";
      break;
    default:
      borderColor = "4px solid var(--Purple, #A050A0)";
  }
  return borderColor;
};

const BorderColour = css<CardContainerProps>`
  border: ${(props) => getBorderColour(props.borderColourIndex || 0)};
`;

const CardContainer = styled.div<CardContainerProps>`
  ${BorderColour}
  cursor: pointer;
  margin: 0 auto;
  text-align: start;
  text-decoration: none;
  height: fit-content;
  transition: all 0.3s ease 0s;
  ${(props) =>
    props.mobile
      ? `
      width: 90%;
  `
      : `
      width: 842px;
  `}
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 15px;
  background: var(--White, #f9f9f9);
  /* Default Shadow */
  box-shadow: 0px 4px 0px 0px #282828;

  & > div {
    padding: 1px;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    overflow: hidden;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  margin-left: auto;
`;

const AnswerContainer = styled.div`
  overflow: hidden;
  transition: all 0.3s ease;
`;

export { CardContainer, QuestionContainer, AnswerContainer, ImageContainer };
