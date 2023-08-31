import styled from "styled-components";
import { QuandrantContainer } from "./index.styles";
import React from "react";

interface QuandrantProps {
  section: number;
}

const getQuadrantColor = (section: number) => {
  switch (section) {
    case 1:
      return `background-color: #007D7D;
              border-top-left-radius: 24px;
              @media screen and (max-width: 875px) {
                border-top-left-radius: 0;
            
              }
      `;
    case 2:
      return `background-color: #F0A0C8;
              border-top-right-radius: 24px;
              @media screen and (max-width: 875px) {
                border-top-right-radius: 0;
            
              }
      `;
    case 3:
      return `background-color: #A050A0;
              border-bottom-left-radius: 24px;
              @media screen and (max-width: 875px) {
                border-bottom-left-radius: 0;
            
              }
      `;
    case 4:
      return `background-color: #F0A000;
              border-bottom-right-radius: 24px;
              @media screen and (max-width: 875px) {
                border-bottom-right-radius: 0;
            
              }
      `;
    default:
      return `background-color: #ffffff;`;
  }
};

const ColourQuadrant = styled(QuandrantContainer)<QuandrantProps>`
  ${(props) => getQuadrantColor(props.section)};
`;

const Quandrant = ({ section }: QuandrantProps) => {
  return <ColourQuadrant section={section} />;
};

export default Quandrant;
