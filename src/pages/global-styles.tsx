import { createGlobalStyle } from "styled-components";

export const subjectivity = `
@font-face {
  font-family: 'Subjectivity';
  src: url('../fonts/SubjectivitySerif-Bold.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
`;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
