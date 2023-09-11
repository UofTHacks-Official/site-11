import styled, { css } from "styled-components";
import React, { ReactNode } from "react";
import Image from "next/image";

type CardContainerProps = {
  mobile?: boolean | null;
  borderColor?: string | null;
};

type StarCornerStyleProps = {
  starStyle: {
    src: any;
    cornerPosition?: string;
    transformX?: string;
    transformY?: string;
    zIndex?: number;
    width?: string;
    height?: string;
  } | null;
};

const BorderColour = css<CardContainerProps>`
  border: ${(props) => props.borderColor || "4px solid var(--Teal, #007d7d)"};
`;

const CardContainer = styled.div<CardContainerProps>`
  ${BorderColour}
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
  position: relative;
  & > div {
    padding: 1px;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    overflow: hidden;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
`;

const ImageContainer = styled.div`
  margin-left: auto;
`;

const AnswerContainer = styled.div``;

const StarCornerStyle = styled(Image)<StarCornerStyleProps>`
  position: absolute;
  ${({ starStyle }) => {
    const { cornerPosition } = starStyle || {};

    switch (cornerPosition) {
      case "top-left":
        return "top: 0; left: 0;";
      case "top-right":
        return "top: 0; right: 0;";
      case "bottom-left":
        return "bottom: 0; left: 0;";
      case "bottom-right":
        return "bottom: 0; right: 0;";
      default:
        return "top: 0; left: 0;";
    }
  }}
  transform: translate(
    ${({ starStyle }) => starStyle?.transformX || "-60%"},
    ${({ starStyle }) => starStyle?.transformY || "-40%"}
  );
  z-index: ${({ starStyle }) => starStyle?.zIndex || 1};
  width: ${({ starStyle }) => starStyle?.width || "5vw"};
  height: ${({ starStyle }) => starStyle?.height || "5vw"};
  flex-shrink: 0;

  // adding all these so that the image is not selectable or draggable
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
`;

export {
  CardContainer,
  QuestionContainer,
  AnswerContainer,
  ImageContainer,
  StarCornerStyle,
};
