import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  width: 100%;
`;

const FirstPolaroid = styled.div`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  margin-right: 1.25rem;
  width: 100%;
  height: 100%;
`;

const SmallQuadrantContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondPolaroid = styled.div`
  z-index: 2;
`;

const ThirdPolaroid = styled.div`
  margin-left: 1.25rem;
`;

export {
  FirstPolaroid,
  SecondPolaroid,
  ThirdPolaroid,
  BoxContainer,
  SmallQuadrantContainer,
};
