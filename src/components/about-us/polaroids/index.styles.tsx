import styled from "styled-components";

type Sticker = {
  imageUrl: string;
  x?: string;
  y?: string;
  size?: string;
  zIndex?: number;
  opacity?: number;
};

type PolaroidProps = {
  imageUrl?: string;
  rotation?: number;
  borderColor?: string;
  zIndex?: number;
  stickers?: Sticker[];
};

const PolaroidWrapper = styled.div<PolaroidProps>`
  width: 14.625rem;
  height: 18.3125rem;
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
};
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-user-select: none;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
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
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
`;

const ImageContainer = styled.div`
  margin: 12px 15px;
  border-radius: 10px;
  border: 2px solid var(--Black, #282828);
`;
export { PolaroidWrapper, Image, StickerContainer, ImageContainer };
