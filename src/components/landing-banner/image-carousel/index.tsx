import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

type ImageCarouselProps = {
  images: any;
  interval: number;
};

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
    <div>
      {images.map((image: any, index: number) => (
        <ImageInQuadrant
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          style={{
            display: index === currentImageIndex ? "block" : "none",
          }}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
