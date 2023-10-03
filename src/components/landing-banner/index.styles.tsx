import styled from "styled-components";

type LandingBannerProps = {
  mobile?: boolean | null;
};

const LandingBannerContainer = styled.div<LandingBannerProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid var(--black, #282828);

  ${(props) =>
    props.mobile
      ? `
    margin: 0;
    border-radius: 0;
    width: 100%;
  `
      : `
    margin: 0 10%;
    min-width: 750px;
    border-radius: 25px;
  `}
  overflow: hidden;
  align-items: center;
  justify-content: center;
  align-self: center;
  align-content: center;
  justify-self: center;
  justify-items: center;
  position: relative;
`;

const Quadrant = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0.7;
  height: 100%;
  flex: 1;
  width: 100%;
`;

export { LandingBannerContainer, Quadrant };
