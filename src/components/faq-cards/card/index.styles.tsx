import styled, { css } from "styled-components";
import Image from "next/image";
import InterSemiBold from "@/components/inter-semi-bold";

type CardContainerProps = {
  mobile?: boolean | null;
  borderColor?: string | null;
  clicked?: boolean | null;
};

type AnswerContainerProps = {
  clicked?: boolean | null;
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
  max-height: ${(props) => (props.clicked ? "500px" : "100px")};
  transition: max-height 0.3s ease-in-out;
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
  flex: 1;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  align-items: center;
  justify-content: space-around;
`;

const SignContainer = styled(InterSemiBold)<CardContainerProps>`
  display: flex;
  color: #282828;
  font-size: ${(props) => (props.mobile ? "24px" : "30px")};
  font-weight: 700;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  padding: 0.2rem;
`;

const StyledInter = styled(InterSemiBold)`
  display: flex;
  flex: 10;
  align-items: center;
`;

const AnswerContainer = styled.div<AnswerContainerProps>`
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
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
  StyledInter,
};
