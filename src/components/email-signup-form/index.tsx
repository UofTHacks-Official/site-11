import React, { useState } from "react";
import {
  SignupInput,
  StyledInter,
  SignupForm,
  SignupButton,
  SignupContainer,
  StyledHeader,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";

const EmailSignupForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null); // State to store the message
  const isMobile = useMobileDetect();

  const handleSignup = async (e: any) => {
    setMessage("");
    e.preventDefault();

    const endpoint = "https://api.uofthacks.com/12/email_list/add";

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
        Want to be the first to know when applications for UoftHacks 12 open up?
      </StyledHeader>
      <StyledInter isMobile={isMobile}>
        We will email you when applications open!
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
      {message && <StyledInter isMobile={isMobile}>{message}</StyledInter>}
    </SignupContainer>
  );
};

export default EmailSignupForm;
