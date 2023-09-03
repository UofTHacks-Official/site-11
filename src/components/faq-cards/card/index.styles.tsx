import styled from "styled-components";

const CardContainer = styled.div`
  margin: 0 auto;
  text-align: left;
  text-decoration: none;
  height: fit-content;
  transition: all 0.3s ease 0s;
  display: flex;
  width: 842px;
  padding: 24px 32px 32px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  border-radius: 15px;
  border: 4px solid var(--Teal, #007d7d);
  background: var(--White, #f9f9f9);
  /* Default Shadow */
  box-shadow: 0px 4px 0px 0px #282828;

  & > div {
    padding: 1px;
    max-width: 100%
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
