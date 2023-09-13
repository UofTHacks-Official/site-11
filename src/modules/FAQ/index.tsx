import { FAQContainer, ColourText, StyledSubjectivity } from "./index.styles";
import FAQCollection from "@/components/faq-cards";

const FAQ = () => {
  return (
    <FAQContainer>
      <StyledSubjectivity>
        Frequently Asked <ColourText>Questions</ColourText>
      </StyledSubjectivity>
      <FAQCollection />
    </FAQContainer>
  );
};

export default FAQ;
