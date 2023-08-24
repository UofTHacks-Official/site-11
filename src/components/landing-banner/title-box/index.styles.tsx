import styled from "styled-components";

const TitleBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  width: 54.6%;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;


const MainTitleContainer = styled.h1`
  color: var(--teal, var(--turquoise, #007D7D));
  text-align: center;
  /* Default Shadow */
  text-shadow: 0px 4px 0px #282828;
  font-family: Subjectivity;
  font-size: 90px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -4.5px;
`;

const SubTitleContainer = styled.p`
  color: var(--black, #282828);
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export { TitleBoxContainer, MainTitleContainer, SubTitleContainer};
