import { FAQCollectionContainer, FAQs } from "./index.styles";
import React from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Card from "./card";
interface FAQProps {
  faqs: any[];
}

const FAQCollection = ({ faqs }: FAQProps) => {
  const isMobile = useMobileDetect();

  const faqList = faqs.map((faq, i) => (
    <Card index={i} question={faq.question} answer={faq.answer} />
  ));

  // If you want to add a hyperlink, you need to manually add a card component below.
  const manualCards = (
    <>
      <Card
        question="What are your COVID-19 regulations?"
        answer={
          <span>
            Our policy will reflect the&nbsp;
            {/* <Link
              type={"blue"}
              href="https://www.utoronto.ca/utogether/covid-19-planning-update"
            >
              University of Toronto&#39;s
            </Link> */}
            &nbsp;COVID protocols. The focus will be to ensure the event is a
            safe environment for all participants. We will have hand sanitizer
            stations, masks and disinfectant wipes throughout the venue.
          </span>
        }
      ></Card>
    </>
  );

  return (
    <FAQCollectionContainer>
      <FAQs>{faqList}</FAQs>
    </FAQCollectionContainer>
  );
};

export default FAQCollection;
