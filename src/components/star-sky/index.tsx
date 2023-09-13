import { StarSkyContainer } from "./index.styles";
import React, { useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";
import starIcon4 from "public/assets/stars/star4.png";
import starIcon5 from "public/assets/stars/star5.png";
import starIcon6 from "public/assets/stars/star6.png";
import starIcon7 from "public/assets/stars/star7.png";
import starIcon8 from "public/assets/stars/star8.png";
import starIcon9 from "public/assets/stars/star9.png";
import starIcon10 from "public/assets/stars/star10.png";
import starIcon12 from "public/assets/stars/star12.png";
import starIcon13 from "public/assets/stars/star13.png";
import starIcon14 from "public/assets/stars/star14.png";
import starIcon15 from "public/assets/stars/star15.png";

interface StarSkyProps {
  front: boolean;
}

const Star = styled.div`
  width: 2px;
  height: 2px;
  background-color: white;
  position: absolute;
  border-radius: 50%;

  &::before {
    content: "";
    width: 4px;
    height: 4px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
    top: -1px;
    left: -1px;
  }
`;

const StarField = styled.div`
  width: 100%;
  height: 100%;
`;

const StarSky = ({ front }: StarSkyProps) => {
  const starPositions = [
    {
      iconSrc: starIcon4,
      style: { position: "absolute", top: "617px", left: "1170px" },
    },
    {
      iconSrc: starIcon5,
      style: { position: "absolute", top: "70px", left: "280px" },
    },
    {
      iconSrc: starIcon6,
      style: { position: "absolute", top: "301px", left: "1140px" },
    },
    {
      iconSrc: starIcon7,
      style: { position: "absolute", top: "-100px", left: "1300px" },
    },
    {
      iconSrc: starIcon9,
      style: { position: "absolute", top: "890px", left: "280px" },
    },
    {
      iconSrc: starIcon8,
      style: { position: "absolute", top: "911px", left: "1281px" },
    },
    {
      iconSrc: starIcon10,
      style: { position: "absolute", top: "1146px", left: "1180px" },
    },
    {
      iconSrc: starIcon12,
      style: { position: "absolute", top: "1146px", left: "100px" },
    },
    {
      iconSrc: starIcon13,
      style: { position: "absolute", top: "1376px", left: "1150px" },
    },
    {
      iconSrc: starIcon14,
      style: { position: "absolute", top: "1416px", left: "150px" },
    },
    {
      iconSrc: starIcon15,
      style: { position: "absolute", top: "461px", left: "113px" },
    },
  ];
  return (
    <StarSkyContainer front={front}>
      {starPositions.map((star, index) => (
        <StarField>
          <Star key={index}>
            {/* <Image src={star.iconSrc} style={star.style} alt="Card Icon" /> */}
          </Star>
        </StarField>
      ))}
    </StarSkyContainer>
  );
};

export default StarSky;
