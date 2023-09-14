import { useMobileDetect } from "@/hooks/useMobileDetect";
import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

type StyledSubjectivityTextProps = {
  style?: any;
  mobile?: boolean | null;
};

const SubjectivityFont = css`
  @font-face {
    font-family: "Subjectivity";

    src: url("/fonts/Subjectivity-Bold.woff2") format("woff2");
    // we can change Subjectivity Style here

    font-weight: normal;
    font-style: normal;
  }
`;

const StyledSubjectivityText = styled.p<StyledSubjectivityTextProps>`
  ${SubjectivityFont}
  font-family: Subjectivity;
  color: var(--dark-blue, #2850a0);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  text-shadow: 0px 4px 0px #282828;
  /* H1 */
  font-size: ${(props) => (props.mobile ? "48px" : "96px")};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3rem;
  -webkit-text-stroke: 1px #282828;
`;

type SubjectivityProps = StyledSubjectivityTextProps & {
  children: ReactNode;
};

const Subjectivity: React.FC<SubjectivityProps> = ({
  children,
  style,
  ...props
}) => {
  const isMobile = useMobileDetect();
  return (
    <StyledSubjectivityText style={style} mobile={isMobile} {...props}>
      {children}
    </StyledSubjectivityText>
  );
};

export default Subjectivity;
