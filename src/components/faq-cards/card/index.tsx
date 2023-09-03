import {
  AnswerContainer,
  CardContainer,
  ImageContainer,
  QuestionContainer,
} from "./index.styles";
import React, { useState } from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Inter from "@/components/inter";
import closedCardIcon from "public/closed-card.png";
import openedCardIcon from "public/opened-card.png";
import Image from "next/image";

interface CardProps {
  index?: number | null;
  question: string;
  answer: React.ReactNode;
}

const Card = ({ index, question, answer }: CardProps) => {
  const [clicked, setClicked] = useState(false);

  const AnswerStyle = {
    paddingTop: "32px",
    color: "#282828",
    fontSize: "16px",
    fontWeight: "400",
    textAlign: "start",
  };

  const iconSrc = clicked ? openedCardIcon : closedCardIcon;

  return (
    <CardContainer onClick={() => setClicked(!clicked)}>
      <div>
        <QuestionContainer>
          <Inter>{question}</Inter>
          <ImageContainer>
            <Image src={iconSrc} alt="Card Icon" />
          </ImageContainer>
        </QuestionContainer>
        {clicked && (
          <AnswerContainer>
            <Inter style={AnswerStyle}>{answer}</Inter>
          </AnswerContainer>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
