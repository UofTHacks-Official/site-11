import styled from "styled-components";

type LandingBannerProps = {
  mobile?: boolean | null;
};

const FAQCollectionContainer = styled.section<LandingBannerProps>`
  border-radius: 10px;
`;

export { FAQCollectionContainer };
