import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { useMobileDetect } from "@/hooks/useMobileDetect";

type FontStyle = "regular" | "bold" | "semibold";

type StyledInterTextProps = {
  style?: any;
  fontStyle?: FontStyle;
  isMobile?: boolean | null;
};

const getFontSrc = (fontStyle?: FontStyle) => {
  switch (fontStyle) {
    case "bold":
      return "Inter-Bold.woff2";
    case "semibold":
      return "Inter-SemiBold.woff2";
    case "regular":
    default:
      return "Inter-Regular.woff2";
  }
};

const InterFont = css<StyledInterTextProps>`
  @font-face {
    font-family: "Inter";
    src: url("/fonts/${(props) => getFontSrc(props.fontStyle)}") format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

const StyledInterText = styled.p<StyledInterTextProps>`
  ${InterFont}
  font-family: Inter;
  text-align: center;
  font-size: ${(props) => (props.isMobile ? "10px" : "20px")};
  font-style: normal;
  font-weight: 700;
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
