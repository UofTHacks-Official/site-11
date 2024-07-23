import styled from "styled-components";
import Image from "next/image";
import Subjectivity from "@/components/subjectivity";

export const CarouselContainer = styled.div`
  .slick-slide {
    padding: 10px;
    width: 100%;
    box-sizing: border-box; 
    //margin-top: 5rem;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 500px;
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
