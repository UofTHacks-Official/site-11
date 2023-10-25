import styled from "styled-components";
import Inter from "../inter";

type StyledInterProps = {
  smallerFont?: boolean;
  bold?: boolean;
  isMobile?: boolean | null;
  opacity?: number;
};

const height = "40px";

const SignupContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledHeader = styled(Inter)<StyledInterProps>`
  font-size: 1.5rem;
  color: var(--Black, var(--black, #282828));
  text-align: center;
  leading-trim: both;

  text-edge: cap;
  /* H4 */
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.03rem;
`;

const StyledInter = styled(Inter)<StyledInterProps>`
  color: var(--Black, var(--black, #282828));
  text-align: center;
  leading-trim: both;

  text-edge: cap;
  /* Body 1 (16px) */
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 1rem;
  opacity: ${(props) => props.opacity || 1};
`;

const SignupForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const SignupInput = styled.input`
  flex: 1;
  border: 2px solid var(--black, #282828);
  border-right: 1px solid var(--black, #282828);
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  &:focus {
    outline: none;
  }
  height: ${height};
`;

const SignupButton = styled.button`
  border: 2px solid var(--black, #282828);
  border-left: 1px solid var(--black, #282828);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #2850a0;
  color: white;
  cursor: pointer;
  height: ${height};
  padding: 0 10px;
  &:hover {
    background-color: #1f3a7a;
    transition: 0.4s ease-out all;
  }
`;
export {
  SignupContainer,
  StyledInter,
  SignupForm,
  SignupInput,
  SignupButton,
  StyledHeader,
};
