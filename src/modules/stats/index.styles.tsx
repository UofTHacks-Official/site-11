import styled from "styled-components";
import Inter from "@/components/inter";
import Subjectivity from "@/components/subjectivity";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
`;

type WrapperProps = {
  mobile?: boolean | null;
};

const Wrapper = styled.div<WrapperProps>`
  min-width: 100%;
  min-height: 100%;
  padding: 10%;
  ${({ mobile }) =>
    mobile &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  `}
`;

type StatsPhotoProps = {
  justifyLeft?: boolean;
  right?: boolean;
  mobile?: boolean | null;
};

type Sticker = {
  x?: string;
  y?: string;
  size?: string;
  zIndex?: number;
  opacity?: number;
  rotate?: number;
  backgroundColor?: string;
};

const StickerContainer = styled.div<Sticker>`
  position: absolute;
  object-fit: contain;
  ${({ x }) => x && `left: ${x};`}
  ${({ y }) => y && `top: ${y};`}
    ${({ size }) => size && `width: ${size};`}
    ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
    ${({ opacity }) => opacity && `opacity: ${opacity};`} 
    -webkit-user-select: none;
  ${({ rotate }) => rotate && `transform: rotate(${rotate}deg);`}
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
  border-radius: 10px;
  padding: 0.5rem 2rem;
  box-shadow: 4px 4px 0px 0px #282828;
`;

const StatsPhoto = styled.div<StatsPhotoProps>`
  ${({ mobile, right, justifyLeft }) =>
    mobile
      ? `
    margin-bottom: 5rem;
    `
      : `
    width: 40%;
    margin-left: ${right ? "50vw" : "10%"};
    margin-top: -10%;
    margin-bottom: 2rem;
    display: flex;
    justify-content: ${justifyLeft ? "left" : "center"};
    position: relative;
  `};
`;

type BoxProps = {
  backgroundColor: string;
  rotation?: number;
  zIndex?: number;
};
const BoxContainer = styled.div<BoxProps>`
  width: 20rem;
  height: 20rem;
  flex-shrink: 0;
  border-radius: 20px;
  background-color: ${(props) => props.backgroundColor};

  transform: rotate(${(props) => props.rotation || 0}deg);
  z-index: ${(props) => props.zIndex || "auto"};

  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.1);
    z-index: 100;
    box-shadow: 10px #282828;
  }
  padding: 1rem;
`;
type InterProps = {
  color?: string;
};

const StyledInter = styled(Inter)<InterProps>`
  font-size: 24px;
  color: ${(props) => props.color};
`;

const StyledSubjectivity = styled(Subjectivity)`
  color: #f9f9f9;
  font-size: 48px;
  letter-spacing: 0.72px;
  -webkit-text-stroke: 1.7px #282828;
  margin-bottom: 4rem;
`;

const ColourText = styled.span`
  color: #007d7d;
`;

export {
  StatsContainer,
  Wrapper,
  StatsPhoto,
  BoxContainer,
  StickerContainer,
  StyledInter,
  StyledSubjectivity,
  ColourText,
};
