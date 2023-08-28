import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type FontStyle = "regular" | "bold" | "semibold";

type StyledInterTextProps = {
  style?: React.CSSProperties;
  fontStyle?: FontStyle;
};

const getFontSrc = (fontStyle: FontStyle) => {
  switch (fontStyle) {
    case "bold":
      return "Inter-Bold.ttf";
    case "semibold":
      return "Inter-SemiBold.ttf";
    case "regular":
    default:
      return "Inter-Regular.ttf";
  }
};

const InterFont = css<StyledInterTextProps>`
  @font-face {
    font-family: "Inter";
    src: url("/fonts/${(props) => getFontSrc(props.fontStyle || "regular")}")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

const StyledInterText = styled.p<StyledInterTextProps>`
  ${InterFont}
  font-family: Inter;
  color: #282828;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

type InterProps = StyledInterTextProps & {
  children: ReactNode;
};

const Inter: React.FC<InterProps> = ({ children, style, ...props }) => {
  return (
    <StyledInterText style={style} {...props}>
      {children}
    </StyledInterText>
  );
};

export default Inter;
