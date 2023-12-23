import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

type ImageCarouselProps = {
  images: any;
  interval: number;
};

const OffscreenPreload = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
`;

const ImageInQuadrant = styled(Image)`
  object-fit: contain;
  user-select: none;
  pointer-events: none;
  user-drag: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, interval);

    return () => clearInterval(imageInterval);
  }, [currentImageIndex, images, interval]);

  return (
    <>
      <OffscreenPreload>
        {images.map((image: any, index: number) => (
          <Image
            key={index}
            src={image}
            alt={`Preload Image ${index + 1}`}
            priority
          />
        ))}
      </OffscreenPreload>
      <div>
        {images.map(
          (image: any, index: number) =>
            image && (
              <ImageInQuadrant
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                style={{
                  display: index === currentImageIndex ? "block" : "none",
                }}
                priority
              />
            )
        )}
      </div>
    </>
  );
};

export default ImageCarousel;
