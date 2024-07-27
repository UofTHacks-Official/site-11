import styled from "styled-components";
import Image from "next/image";
import Subjectivity from "@/components/subjectivity";

import nextArrowIcon from "public/assets/photo-carousel/nextArrow.png";
import prevArrowIcon from "public/assets/photo-carousel/prevArrow.png";
import {CSSProperties, MouseEventHandler} from "react";

export const CarouselContainer = styled.div`
  .slick-slide {
    padding: 10px;
    width: 100%;
    box-sizing: border-box; 
    overflow: hidden;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    display: flex;
  }

  .slick-arrow.slick-next,
  .slick-arrow.slick-prev {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .slick-prev::before,
  .slick-next::before {
    display: none;
  }
  .slick-slide > div {
    pointer-events: none;
  }
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 800px;
  height: 100%;
  aspect-ratio: 1;
  object-fit: contain;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -ms-user-drag: none;
  user-drag: none;
`;

export const StyledSubjectivity = styled(Subjectivity)`
  color: #f9f9f9;
  font-size: 48px;
  letter-spacing: 0.72px;
  -webkit-text-stroke: 1.7px #282828;
  margin-bottom: 1rem;
  margin-top: 5rem;
`;

export const ColourText = styled.span`
  color: #F0C800;
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    opacity: 1;
  }
`;

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const NextArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <Arrow
      className={className}
      style={{ ...style, right: 10 }}
      onClick={onClick}
    >
      <Image src={nextArrowIcon} alt="Next" width={40} height={40} />
    </Arrow>
  );
};

export const PrevArrow = ({ className, style, onClick }: ArrowProps) => {
  return (
    <Arrow
      className={className}
      style={{ ...style, left: 10 }}
      onClick={onClick}
    >
      <Image src={prevArrowIcon} alt="Previous" width={40} height={40} />
    </Arrow>
  );
};

