import styled from "styled-components";
import Inter from "../inter";
import { useState } from "react";
import {
  SignupInput,
  StyledInter,
  SignupForm,
  SignupButton,
  SignupContainer,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import { MobileContainer } from "../about-us/mobile/index.styles";

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const isMobile = useMobileDetect();

  const handleSignup = (e: any) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <SignupContainer>
      <StyledInter bold={true} isMobile={isMobile}>
        Want to be the first to know when applications open up?
      </StyledInter>
      <StyledInter smallerFont={true} isMobile={isMobile}>
        Enter your email below to sign up for our mailing list!
      </StyledInter>
      <SignupForm onSubmit={handleSignup}>
        <SignupInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
        />
        <SignupButton type="submit">Sign Up</SignupButton>
      </SignupForm>
    </SignupContainer>
  );
};

export default EmailSignupForm;
``;
