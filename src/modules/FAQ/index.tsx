import { FAQContainer, ColourText } from "./index.styles";
import Subjectivity from "@/components/subjectivity";
import Inter from "@/components/inter";
import FAQCollection from "@/components/faq-cards";
import StarSky from "@/components/star-sky";

const FAQ = () => {
  const titleStyle = {
    color: "#F9F9F9",
    fontSize: "48px",
    letterSpacing: "0.72px",
  };

  return (
    <FAQContainer>
      {/* <StarSky front={false} /> */}
      <Subjectivity style={titleStyle}>
        Frequently Asked <ColourText>Questions</ColourText>
      </Subjectivity>
      <FAQCollection />
    </FAQContainer>
  );
};

export default FAQ;
