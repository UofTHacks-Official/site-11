import {
  AnswerContainer,
  CardContainer,
  SignContainer,
  QuestionContainer,
  StarCornerStyle,
  StyledInter,
} from "./index.styles";
import React, { useEffect, useState } from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Inter from "@/components/inter";

type CardProps = {
  question: string;
  answer: React.ReactNode;
  star?: {
    src: any;
    cornerPosition?: string;
    transformX?: string;
    transformY?: string;
    zIndex?: number;
    width?: string;
    height?: string;
  };
  borderColor?: string | null;
};

const Card = ({ question, answer, star, borderColor }: CardProps) => {
  const isMobile = useMobileDetect();
  const [clicked, setClicked] = useState(true);

  const QuestionStyle = (mobile: boolean | null) => ({
    fontSize: mobile ? "16px" : "24px",
    textAlign: "left",
  });

  const AnswerStyle = (mobile: boolean | null) => ({
    paddingTop: "32px",
    color: "#282828",
    fontSize: mobile ? "14px" : "16px",
    fontWeight: "400",
    textAlign: "start",
  });

  // Reset the clicked state when the component is mounted
  useEffect(() => {
    setClicked(false);
  }, []);

  return (
    <CardContainer borderColor={borderColor} mobile={isMobile}>
      {star && (
        <StarCornerStyle src={star.src} starStyle={star} alt="Star Sticker" />
      )}

      <QuestionContainer onClick={() => setClicked(!clicked)}>
        <StyledInter style={QuestionStyle(isMobile)}>{question}</StyledInter>
        <SignContainer mobile={isMobile}>
          {clicked ? <>&minus;</> : "+"}
        </SignContainer>
      </QuestionContainer>

      {clicked && (
        <AnswerContainer>
          <Inter style={AnswerStyle(isMobile)}>{answer}</Inter>
        </AnswerContainer>
      )}
    </CardContainer>
  );
};

export default Card;
