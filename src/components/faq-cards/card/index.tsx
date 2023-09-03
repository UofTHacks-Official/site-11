import {
  AnswerContainer,
  CardContainer,
  QuestionContainer,
} from "./index.styles";
import React, { useState } from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";

interface CardProps {
  index?: number | null;
  question: string;
  answer: React.ReactNode;
}

const Card = ({ index, question, answer }: CardProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <CardContainer>
      <div>
        <QuestionContainer onClick={() => setClicked(!clicked)}>
          {question}
        </QuestionContainer>
        {clicked && <AnswerContainer>{answer}</AnswerContainer>}
      </div>
    </CardContainer>
  );
};

export default Card;
