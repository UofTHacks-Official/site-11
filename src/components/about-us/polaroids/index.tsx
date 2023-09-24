import React from "react";
import {
  PolaroidWrapper,
  PolaroidImage,
  StickerContainer,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";

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
};

const Polaroid: React.FC<PolaroidProps> = ({
  imageUrl,
  rotation,
  borderColor,
  zIndex,
  stickers,
}) => {
  Polaroid.defaultProps = {
    rotation: 0,
    borderColor: "var(--Purple, #a050a0)",
    zIndex: 1,
    stickers: [],
  };

  const isMobile = useMobileDetect();

  if (imageUrl)
    return (
      <PolaroidWrapper
        rotation={rotation}
        borderColor={borderColor}
        zIndex={zIndex}
        mobile={isMobile}
      >
        {stickers &&
          stickers.map((sticker, index) => (
            <StickerContainer
              key={index}
              src={sticker.imageUrl}
              alt="Sticker"
              {...sticker}
            />
          ))}
        <PolaroidImage src={imageUrl} alt="Polaroid Photo" />
      </PolaroidWrapper>
    );
};

export default Polaroid;
