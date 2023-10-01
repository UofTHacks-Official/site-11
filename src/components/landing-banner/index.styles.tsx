import styled from "styled-components";
import Image from "next/image";

type LandingBannerProps = {
  mobile?: boolean | null;
};

const LandingBannerContainer = styled.div<LandingBannerProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border: 1px solid var(--black, #282828);
  min-height: 75vh;
  height: 100%;
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
  opacity: 0.5;
`;

const ImageInQuadrant = styled(Image)`
  width: 40vw;
  height: 325px;
  aspect-ratio: 1;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  user-drag: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const QuadrantRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const QuadrantContainer = styled.div`
  display: grid;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export {
  LandingBannerContainer,
  QuadrantContainer,
  QuadrantRowContainer,
  Quadrant,
  ImageInQuadrant,
};
