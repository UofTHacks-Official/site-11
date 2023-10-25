import { EmailFormContainer } from "./index.styles";
import EmailSignupForm from "@/components/email-signup-form";
const EmailForm = () => {
  return (
    <EmailFormContainer id="landing-page">
      <EmailSignupForm />
    </EmailFormContainer>
  );
};

export default EmailForm;
