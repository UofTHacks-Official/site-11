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
  const [message, setMessage] = useState<string | null>(null); // State to store the message
  const isMobile = useMobileDetect();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    // TODO add endpoint here once ready
    const endpoint = "";

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
        const errorData = await response.json();
        if (
          errorData.error ===
          "Your email has already been added to the mailing list."
        ) {
          setMessage("Email already exists");
        } else if (errorData.error === "email invalid") {
          setMessage("Invalid email, please try again.");
        } else {
          setMessage("An unexpected error occurred");
        }
      }
    } catch (error) {
      setMessage("Error submitting email");
    }
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
      {message && (
        <StyledInter smallerFont={true} isMobile={isMobile}>
          {message}
        </StyledInter>
      )}
    </SignupContainer>
  );
};

export default EmailSignupForm;
