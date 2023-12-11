import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { useMobileDetect } from "@/hooks/useMobileDetect";

type StyledInterTextProps = {
  style?: any;
  isMobile?: boolean | null;
};

const InterSemiBoldFont = css<StyledInterTextProps>`
  @font-face {
    font-family: "InterSemiBold";

    src: url("/fonts/Inter-SemiBold.woff2") format("woff2");

    font-weight: normal;
    font-style: normal;
  }
`;

const StyledInterText = styled.p<StyledInterTextProps>`
  ${InterSemiBoldFont}
  font-family: InterSemiBold;
  text-align: center;
  font-size: ${(props) => (props.isMobile ? "10px" : "20px")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: var(--black, #282828);
`;

type InterProps = StyledInterTextProps & {
  children: ReactNode;
};

const InterSemiBold: React.FC<InterProps> = ({ children, style, ...props }) => {
  const isMobile = useMobileDetect();
  return (
    <StyledInterText style={style} isMobile={isMobile} {...props}>
      {children}
    </StyledInterText>
  );
};

export default InterSemiBold;
