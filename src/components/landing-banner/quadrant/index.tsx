import styled from "styled-components";
import { QuandrantContainer } from "./index.styles";
import React from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";

interface QuandrantProps {
  section: number;
  mobile: boolean;
}

const getQuadrantStyle = (section: number, mobile: boolean) => {
  switch (section) {
    case 1:
      return `background-color: #007D7D;
              ${
                mobile
                  ? `
                border-top-left-radius: 0;
              `
                  : `
                border-top-left-radius: 24px;
              }
              `
              }
      `;
    case 2:
      return `background-color: #F0A0C8;
      ${
        mobile
          ? `
        border-top-right-radius: 0;
      `
          : `
        border-top-right-radius: 24px;
      }
      `
      }
`;
    case 3:
      return `background-color: #A050A0;
      ${
        mobile
          ? `
        border-bottom-left-radius: 0;
      `
          : `
        border-bottom-left-radius: 24px;
      }
      `
      }
`;
    case 4:
      return `background-color: #F0A000;
      ${
        mobile
          ? `
        border-bottom-right-radius: 0;
      `
          : `
        border-bottom-right-radius: 24px;
      }
      `
      }
`;
    default:
      return `background-color: #ffffff;`;
  }
};

const ColourQuadrant = styled(QuandrantContainer)<QuandrantProps>`
  ${(props) => getQuadrantStyle(props.section, props.mobile)};
`;

const Quandrant = ({ section }: QuandrantProps) => {
  const isMobile = useMobileDetect();
  return <ColourQuadrant section={section} mobile={isMobile} />;
};

export default Quandrant;
