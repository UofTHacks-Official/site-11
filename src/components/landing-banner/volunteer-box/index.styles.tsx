import styled from "styled-components";

type VolunteerBoxContainerProps = {
  mobile?: boolean | null;
};

const PushDownContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  padding-top: 220px;
  width: 578px;
  z-index: 2;
  justify-self: center;
  flex-direction: row;
`;

const TextPromptContainer = styled.div`
  width: 60%;
`;

const ButtonGroupContainer = styled.div`
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const PrimaryButtonContainer = styled.button`
  margin: 0.5rem 1rem;
  width: 35%;
  padding: 0.5rem;
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

const VolunteerBoxContainer = styled.div<VolunteerBoxContainerProps>`
  position: absolute;

  padding: ${(props) =>
    props.mobile
      ? "1rem 1rem 1rem 1em"
      : "1rem 2rem 1rem 2rem"};

  border-radius: 5px;
  border: 2px solid var(--black, #282828);
  background: var(--white, #f9f9f9);
  box-shadow: 0px 4px 0px 0px #282828;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.4rem;

  // can be removed - testing only
  ${(props) =>
    props.mobile &&
    `
  width: 80%;
  max-width: 350px;
  `}
  margin-bottom: 2rem;
`;

export {
  PushDownContainer,
  PrimaryButtonContainer,
  PrimaryButtonTextContainer,
  SecondaryButtonContainer,
  SecondaryButtonTextContainer,
  TextPromptContainer,
  VolunteerBoxContainer,
  ButtonGroupContainer
};
