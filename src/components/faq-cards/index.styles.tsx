import styled from "styled-components";

type LandingBannerProps = {
  mobile?: boolean | null;
};

const FAQCollectionContainer = styled.section<LandingBannerProps>`
  min-height: 100vh,
  width: 100%,
`;

const FAQs = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem 1rem;
  min-height: 100%;
  min-width: 100%;
  padding: 5rem 0;
  margin: 0;
  border-radius: 10px;
`;

export { FAQCollectionContainer, FAQs };
