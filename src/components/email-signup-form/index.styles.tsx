import styled from "styled-components";
import Inter from "../inter";

type StyledInterProps = {
  smallerFont?: boolean;
  bold?: boolean;
  isMobile?: boolean | null;
};
const SignupContainer = styled.div`
  max-width: 700px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInter = styled(Inter)<StyledInterProps>`
  font-size: ${(props) => {
    if (props.bold) return props.isMobile ? "0.9rem" : "1.5rem";
    if (props.smallerFont) return props.isMobile ? "0.7rem" : "1.1rem";
    return "inherit";
  }};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  padding-bottom: 20px;
`;

const SignupForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 58%;
  margin: 0 auto;
  border: black;
  margin-bottom: 10px;

  &:focus-within {
    border-radius: 5px;
    outline: 2px solid #282828;
  }
`;

const SignupInput = styled.input`
  flex: 1;
  border: 1px solid black;
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: none;
  &:focus {
    outline: 2px solid #282828;
  }
`;

const SignupButton = styled.button`
  border: 1px solid black;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: none;
  padding: 10px 15px;
  background-color: #2850a0;
  color: white;
`;
export { SignupContainer, StyledInter, SignupForm, SignupInput, SignupButton };
