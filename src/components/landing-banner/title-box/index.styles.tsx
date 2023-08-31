import styled from "styled-components";

const TitleBoxContainer = styled.div`
  display: inline-flex;
  position: absolute;
  padding: 40px 60px 20px 60px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 250px;
  width: 70%;
  border-radius: 5px;
  border: 2px solid var(--black, #282828);
  background: var(--white, #f9f9f9);
  /* Default Shadow */
  box-shadow: 0px 4px 0px 0px #282828;
  padding: 0px;
  z-index: 1;
  @media screen and (max-width: 875px) {
    height: 175px;
  }
`;

const InnerTitleBoxContainer = styled.div`
  padding-top: 50px;
  width: 130%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  @media screen and (max-width: 875px) {
    width: 100%;
  }
`;

const MainTitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const SubTitleContainer = styled.div`
  text-align: center;
  line-height: normal;
`;

export {
  TitleBoxContainer,
  InnerTitleBoxContainer,
  MainTitleContainer,
  SubTitleContainer,
};
