import React from "react";
import Slider from "react-slick";
import { CarouselContainer, StyledImage, StyledSubjectivity, ColourText,  NextArrow, PrevArrow} from "./index.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import pic1 from "public/assets/photo-carousel/pic1.svg";
import pic2 from "public/assets/photo-carousel/pic2.svg";
import pic3 from "public/assets/photo-carousel/pic3.svg";

const PhotoCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  return (
    <CarouselContainer>
        <StyledSubjectivity>
        Photos from  <ColourText>UofTHacks 11</ColourText>
      </StyledSubjectivity>
      <Slider {...settings}>
        <div>
          <StyledImage src={pic1} alt="pic1" />
        </div>
        <div>
          <StyledImage src={pic2} alt="pic2" />
        </div>
        <div>
          <StyledImage src={pic3} alt="pic3" />
        </div>
      </Slider>
    </CarouselContainer>
  );
};

export default PhotoCarousel;
