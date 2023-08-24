import styled from "styled-components";

const ButtonGroupContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  z-index: 2;
`;


const ButtonContainer = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 10px;
  background-color: black;
  color: white;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
`;
export { ButtonGroupContainer, ButtonContainer };
