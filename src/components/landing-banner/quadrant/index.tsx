import styled from "styled-components";
import { QuandrantContainer } from "./index.styles";

interface QuandrantProps {
    section: number;
}

const getQuadrantColor = (section: number) => {
    switch (section) {
      case 1:
        return "#007D7D";
      case 2:
        return "#F0A0C8";
      case 3:
        return "#A050A0";
      case 4:
        return "#F0A000";
      default:
        return "#ffffff";
    }
  };

const ColourQuadrant = styled(QuandrantContainer)<QuandrantProps>`
  background-color: ${(props) => getQuadrantColor(props.section)};
`;

const Quandrant = ({ section }: QuandrantProps) => {
  return <ColourQuadrant section={section}/>
};

export default Quandrant;