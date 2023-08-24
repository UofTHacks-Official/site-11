import styled from "styled-components";

const ButtonGroupContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  padding-top: 350px;
  z-index: 2;
`;

const PrimaryButtonContainer = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
  border-radius: 15px;
  border: 2px solid var(--black, #282828);
  background: var(--black, #282828);
`;

const PrimaryButtonTextContainer = styled.div`
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

const SecondaryButtonContainer = styled.button`
  margin: 1rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }
  border-radius: 15px;
  border: 2px solid var(--black, #282828);
  color: solid var(--white, #F9F9F9);
`;

const SecondaryButtonTextContainer = styled.div`
  color: var(--black, #282828);
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
export { ButtonGroupContainer, PrimaryButtonContainer, PrimaryButtonTextContainer, SecondaryButtonContainer, SecondaryButtonTextContainer };
