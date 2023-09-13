import { FAQCollectionContainer } from "./index.styles";
import React from "react";
import Card from "./card";
import faqs from "@/modules/FAQ/faqs";

const FAQCollection = () => {
  const faqList = faqs.map((faq) => (
    <Card
      question={faq.question}
      answer={faq.answer}
      star={faq.star}
      borderColor={faq.borderColor}
    />
  ));

  return <FAQCollectionContainer>{faqList}</FAQCollectionContainer>;
};

export default FAQCollection;
