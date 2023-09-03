import {
  AnswerContainer,
  CardContainer,
  QuestionContainer,
} from "./index.styles";
import React, { useState } from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Inter from "@/components/inter";

interface CardProps {
  index?: number | null;
  question: string;
  answer: React.ReactNode;
}

const Card = ({ index, question, answer }: CardProps) => {
  const [clicked, setClicked] = useState(false);
  return (
    <CardContainer onClick={() => setClicked(!clicked)}>
      <div>
        <QuestionContainer>
          <Inter>{question}</Inter>
        </QuestionContainer>
        {clicked && (
          <AnswerContainer>
            <Inter>{answer}</Inter>
          </AnswerContainer>
        )}
      </div>
    </CardContainer>
  );
};

export default Card;
