import styled from "styled-components";

type TitleBoxContainerProps = {
  mobile?: boolean | null;
};

type InnerTitleBoxContainerProps = {
  mobile?: boolean | null;
};

const TitleBoxContainer = styled.div<TitleBoxContainerProps>`
  position: absolute;

  padding: ${(props) =>
    props.mobile
      ? "2.5rem 1.88rem 1.25rem 1.88rem"
      : "2.5rem 3.75rem 1.25rem 3.75rem"};

  border-radius: 5px;
  border: 2px solid var(--black, #282828);
  background: var(--white, #f9f9f9);
  box-shadow: 0px 4px 0px 0px #282828;

  justify-content: center;
  align-items: center;
`;

const InnerTitleBoxContainer = styled.div<InnerTitleBoxContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ShiftedContainer = styled.span`=
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
  ShiftedContainer,
  SubTitleContainer,
};
