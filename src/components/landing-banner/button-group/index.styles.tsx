import styled from "styled-components";

const ButtonGroupContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  padding-top: 350px;
  z-index: 2;
`;

const ButtonContainer = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
  border-radius: 15px;
  border: 2px solid var(--black, #282828);
  background: var(--black, #282828);
`;

const ButtonTextContainer = styled.div`
  color: var(--white, #F9F9F9);
  text-align: center;
  leading-trim: both;
  text-edge: cap;

  /* Button */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.28px;
  text-transform: uppercase;
`;
export { ButtonGroupContainer, ButtonContainer, ButtonTextContainer};
