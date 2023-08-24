import styled from "styled-components";

const TitleBoxContainer = styled.div`
  display: inline-flex;
  padding: 40px 60px 20px 60px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 30%;
  width: 54.6%;
  border-radius: 5px;
  border: 2px solid var(--black, #282828);
  background: var(--white, #F9F9F9);
  /* Default Shadow */
  box-shadow: 0px 4px 0px 0px #282828;
  padding: 20px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const InnerTitleBoxContainer = styled.div`
  margin-top: 3%;
  width: 84%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MainTitleContainer = styled.h1`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  color: var(--dark-blue, #2850A0);
  text-align: center;
  leading-trim: both;
  text-edge: cap;
  text-shadow: 0px 4px 0px #282828;

  /* H1 */
  font-family: Subjectivity;
  font-size: 10em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -4.8px;
`;

const SubTitleContainer = styled.p`
  color: var(--black, #282828);
  text-align: center;
  font-family: Inter;
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export { TitleBoxContainer, InnerTitleBoxContainer, MainTitleContainer, SubTitleContainer};
