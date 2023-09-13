import styled, { css } from "styled-components";
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
  width: 90%;
  ${(props) => !props.mobile && ` max-width: 842px;`}
  padding: 1.5rem 2rem;
  border-radius: 15px;
  background: var(--White, #f9f9f9);
  box-shadow: 0px 4px 0px 0px #282828;
  position: relative;
  margin-bottom: 2rem;
  min-width: 300px;
`;

const QuestionContainer = styled.div`
  display: flex;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  align-items: center;
`;

const SignContainer = styled.div<CardContainerProps>`
  color: #282828;
  font-size: ${(props) => (props.mobile ? "24px" : "30px")};
  font-weight: 700;
  margin-left: auto;
  align-items: center;
`;

const AnswerContainer = styled.div`
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

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
  SignContainer,
  StarCornerStyle,
};
