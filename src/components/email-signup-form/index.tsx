import styled from "styled-components";
import Inter from "../inter";
import { useState } from "react";
import {
  SignupInput,
  StyledInter,
  SignupForm,
  SignupButton,
  SignupContainer,
  StyledHeader,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import { MobileContainer } from "../about-us/mobile/index.styles";

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null); // State to store the message
  const isMobile = useMobileDetect();

  const handleSignup = async (e: any) => {
    setMessage("");
    e.preventDefault();

    const endpoint = "https://api.uofthacks.com/xi/email_list/add";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email: email,
        }),
      });

      if (response.status === 200) {
        setMessage(
          "Your email has successfully been added to the mailing list!"
        );
        setEmail("");
      } else {
        setMessage("Your email has already been added to the mailing list.");
      }
    } catch (error) {
      setMessage("Error submitting email");
    }
  };

  return (
    <SignupContainer>
      <StyledHeader isMobile={isMobile}>
        Want to be the first to know when applications open up?
      </StyledHeader>
      <StyledInter isMobile={isMobile}>
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
        <SignupButton type="submit">SIGN UP</SignupButton>
      </SignupForm>
      {message ? (
        <StyledInter isMobile={isMobile}>{message}</StyledInter>
      ) : (
        <StyledInter isMobile={isMobile} opacity={0}>
          &nbsp;&nbsp;
        </StyledInter>
      )}
    </SignupContainer>
  );
};

export default EmailSignupForm;
