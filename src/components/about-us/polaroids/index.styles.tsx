import Image from "next/image";
import styled from "styled-components";

type Sticker = {
  imageUrl: string;
  x?: string;
  y?: string;
  size?: string;
  zIndex?: number;
  opacity?: number;
  rotate?: number;
};

type PolaroidProps = {
  imageUrl?: string;
  rotation?: number;
  borderColor?: string;
  zIndex?: number;
  stickers?: Sticker[];
  mobile?: boolean | null;
};

const PolaroidWrapper = styled.div<PolaroidProps>`
  width: 40vw;
  max-width: 14.625rem;
  height: 18.3125rem;
  max-height: 100%;
  flex-shrink: 0;
  border-radius: 15px;
  border: 2px solid ${(props) => props.borderColor || "var(--Purple, #a050a0)"};
  background: var(--white, #f9f9f9);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  transform: rotate(${(props) => props.rotation || 0}deg);
  box-shadow: 10px 16px 0px 0px #282828;
  z-index: ${(props) => props.zIndex || "auto"}; // Set z-index
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
  
  &:hover {
    transform: scale(1.1) rotate(3deg);
    z-index: 100;
    box-shadow: 10px #282828;
  }
  ${(props) =>
    props.mobile &&
    `height: 100%;
    // max-height: min(50vw, 320px);
      max-height: 50vw;
  `}
};
`;

const PolaroidImage = styled.img`
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
  border-radius: 15px;
`;

const StickerContainer = styled.img<Sticker>`
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
`;

const ImageContainer = styled.div`
  overflow: hidden;
`;

export { PolaroidWrapper, PolaroidImage, StickerContainer, ImageContainer };
