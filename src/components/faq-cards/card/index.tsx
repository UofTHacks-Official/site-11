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
    <CardContainer
      borderColourIndex={index}
      mobile={isMobile}
      onClick={() => setClicked(!clicked)}
    >
      <div>
        <QuestionContainer>
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
      </div>
    </CardContainer>
  );
};

export default Card;
