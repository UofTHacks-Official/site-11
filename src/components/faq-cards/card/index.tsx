import {
  AnswerContainer,
  CardContainer,
  ImageContainer,
  QuestionContainer,
  StarCornerStyle,
} from "./index.styles";
import React, { useState } from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Inter from "@/components/inter";
import closedCardIcon from "public/closed-card.png";
import openedCardIcon from "public/opened-card.png";
import Image from "next/image";

type CardProps = {
  index?: number | null;
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

const Card = ({ index, question, answer, star, borderColor }: CardProps) => {
  const isMobile = useMobileDetect();
  const [clicked, setClicked] = useState(false);

  const QuestionStyle = (mobile: boolean | null) => ({
    fontSize: mobile ? "16px" : "24px",
    textAlign: "start",
  });

  const AnswerStyle = (mobile: boolean | null) => ({
    paddingTop: "32px",
    color: "#282828",
    fontSize: mobile ? "14px" : "16px",
    fontWeight: "400",
    textAlign: "start",
  });

  const iconSrc = clicked ? openedCardIcon : closedCardIcon;

  return (
    <CardContainer borderColor={borderColor} mobile={isMobile}>
      {/* so I want to 1. ask to show star here or not */}
      {/* 2. if showing a star then where top right left bottom */}
      {/* 3. if showing a star then what size */}
      {/* 4. if showing a star then which star */}
      {star && (
        <StarCornerStyle src={star.src} starStyle={star} alt="Star Sticker" />
      )}
      <QuestionContainer onClick={() => setClicked(!clicked)}>
        <Inter style={QuestionStyle(isMobile)}>{question}</Inter>
        <ImageContainer>
          <Image src={iconSrc} alt="Card Icon" />
        </ImageContainer>
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
