import styled from "styled-components";

type TitleBoxContainerProps = {
  mobile?: boolean | null;
};

type InnerTitleBoxContainerProps = {
  mobile?: boolean | null;
};

const TitleBoxContainer = styled.div<TitleBoxContainerProps>`
  display: inline-flex;
  position: absolute;
  padding: 40px 60px 20px 60px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 70%;
  border-radius: 5px;
  border: 2px solid var(--black, #282828);
  background: var(--white, #f9f9f9);
  /* Default Shadow */
  box-shadow: 0px 4px 0px 0px #282828;
  padding: 0px;
  z-index: 1;
  height: ${(props) => (props.mobile ? "175px" : "250px")};
`;

const InnerTitleBoxContainer = styled.div<InnerTitleBoxContainerProps>`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: ${(props) => (props.mobile ? "100%" : "130%")};
`;

const MainTitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const ShiftedContainer = styled.span`
  display: inline-block;
  transform: translateX(-1%);
`;

const SubTitleContainer = styled.div`
  text-align: center;
  line-height: normal;
`;

export {
  TitleBoxContainer,
  InnerTitleBoxContainer,
  MainTitleContainer,
  ShiftedContainer,
  SubTitleContainer,
};
