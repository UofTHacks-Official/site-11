import styled from "styled-components";

const CardContainer = styled.div`
  margin: 0 auto;
  display: block;
  width: 35.168rem;
  padding: 4px 20px;
  text-align: left;
  text-decoration: none;
  height: fit-content;
  transition: all 0.3s ease 0s;

  & > div {
    padding: 1px;
    max-width: 35.168rem;
    background-origin: border-box;
    background-clip: padding-box, border-box;
    overflow: hidden;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  cursor: pointer;
`;

const AnswerContainer = styled.div`
  overflow: hidden;
  transition: all 0.3s ease;
`;

export { CardContainer, QuestionContainer, AnswerContainer };
