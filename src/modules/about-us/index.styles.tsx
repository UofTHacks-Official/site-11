import styled from "styled-components";

const AboutUsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const DesktopContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 7.25rem 6.25rem;
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColourText = styled.span`
  color: var(--Pink, #f0a0c8);
`;

export { AboutUsContainer, DesktopContainer, MobileContainer, ColourText };
