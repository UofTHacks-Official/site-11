import styled, { css } from "styled-components";
import React, { ReactNode } from "react";

type StarSkyProps = {
  mobile?: boolean | null;
  front: boolean;
};

const StarSkyContainer = styled.section<StarSkyProps>`
  width: 100%;
  z-index: ${(props) => (props.front ? 1 : -1)};
`;
export { StarSkyContainer };
