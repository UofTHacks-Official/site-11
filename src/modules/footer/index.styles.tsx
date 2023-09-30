import styled from "styled-components";

type WrapperProps = {
  mobile?: boolean | null;
};
const Wrapper = styled.footer<WrapperProps>`
  display: flex;
  justify-content: space-around;
  min-height: 2.5rem;
  width: 100%;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  padding: 3rem 0;
  column-gap: 50px;
  row-gap: 25px;
`;

export { Wrapper };
