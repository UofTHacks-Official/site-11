import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { useMobileDetect } from "@/hooks/useMobileDetect";

type StyledInterTextProps = {
  style?: any;
  isMobile?: boolean | null;
};

const InterFont = css<StyledInterTextProps>`
  @font-face {
    font-family: "Inter";
    src: url("/fonts/Inter-Regular.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

const StyledInterText = styled.p<StyledInterTextProps>`
  ${InterFont}
  font-family: Inter;
  font-size: ${(props) => (props.isMobile ? "17px" : "20px")};
  font-style: normal;
  line-height: normal;
`;

type InterProps = StyledInterTextProps & {
  children: ReactNode;
};

const Inter: React.FC<InterProps> = ({ children, style, ...props }) => {
  const isMobile = useMobileDetect();
  return (
    <StyledInterText style={style} isMobile={isMobile} {...props}>
      {children}
    </StyledInterText>
  );
};

export default Inter;
