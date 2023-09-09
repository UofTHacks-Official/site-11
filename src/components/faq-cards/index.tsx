import { FAQCollectionContainer, FAQs } from "./index.styles";
import React from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import Card from "./card";
import faqs from "@/modules/FAQ/faqs";

const FAQCollection = () => {
  const faqList = faqs.map((faq, i) => (
    <Card
      index={i}
      question={faq.question}
      answer={faq.answer}
      star={faq.star}
    />
  ));

  return (
    <FAQCollectionContainer>
      <FAQs>{faqList}</FAQs>
    </FAQCollectionContainer>
  );
};

export default FAQCollection;
