import { FAQContainer, ColourText } from "./index.styles";
import Subjectivity from "@/components/subjectivity";
import Inter from "@/components/inter";
import FAQCollection from "@/components/faq-cards";

const FAQ = () => {
  const titleStyle = {
    color: "#F9F9F9",
    fontSize: "48px",
    letterSpacing: "0.72px",
  };

  const faqs = require("./faqs.json");

  return (
    <FAQContainer>
      <Subjectivity style={titleStyle}>
        Frequently Asked <ColourText>Questions</ColourText>
      </Subjectivity>
      <FAQCollection faqs={faqs}></FAQCollection>
    </FAQContainer>
  );
};

export default FAQ;
