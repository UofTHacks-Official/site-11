import React from "react";
import Slider from "react-slick";
import { CarouselContainer, StyledImage, StyledSubjectivity, ColourText,  NextArrow, PrevArrow} from "./index.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pic1 from "public/assets/photo-carousel/pic1.png";
import pic2 from "public/assets/photo-carousel/pic2.png";
import pic3 from "public/assets/photo-carousel/pic3.png";

const PhotoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",  
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

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
