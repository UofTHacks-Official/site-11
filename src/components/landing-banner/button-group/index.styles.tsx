import styled from "styled-components";

const ButtonGroupContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  padding-top: 350px;
  z-index: 2;
  justify-self: center;
`;

const PrimaryButtonContainer = styled.button`
  margin: 1rem;
  min-width: 280px;
  padding: 1rem 3rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid var(--black, #282828);
  background: var(--black, #282828);
  border-radius: 5px;
  border: 2px solid var(--Black, #282828);
  background: var(--Blue, #2850a0);
  /* Default Shadow */
  box-shadow: 0px 4px 0px 0px #282828;
  &:hover {
    transform: scale(1.05);
  }
`;

const PrimaryButtonTextContainer = styled.div`
  text-transform: uppercase;
  color: var(--white, #f9f9f9);
`;

const SecondaryButtonContainer = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid var(--black, #282828);
  color: solid var(--white, #f9f9f9);
  &:hover {
    transform: scale(1.05);
  }
`;

const SecondaryButtonTextContainer = styled.div`
  text-transform: uppercase;
  color: var(--black, #282828);
`;
export {
  ButtonGroupContainer,
  PrimaryButtonContainer,
  PrimaryButtonTextContainer,
  SecondaryButtonContainer,
  SecondaryButtonTextContainer,
};
