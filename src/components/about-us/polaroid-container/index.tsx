import Polaroid from "../polaroids";
import {
  FirstPolaroid,
  SecondPolaroid,
  ThirdPolaroid,
  BoxContainer,
  SmallQuadrantContainer,
} from "./index.styles";

const PolaroidContainer = () => {
  return (
    <BoxContainer>
      <FirstPolaroid>
        <Polaroid
          imageUrl={"/assets/polaroid/polaroid1.jpg"}
          borderColor={"#A050A0"}
          stickers={[
            {
              imageUrl: "assets/tape/tape-1.png",
              x: "-14%", // move left-right
              y: "-7%", // move top-bottom
              size: "100px",
              zIndex: 2,
            },
            {
              imageUrl: "assets/tape/tape-1.png",
              x: "70%", // move left-right
              y: "87%", // move top-bottom
              size: "100px",
              zIndex: 2,
            },
          ]}
        />
      </FirstPolaroid>
      <SmallQuadrantContainer>
        <SecondPolaroid>
          <Polaroid
            imageUrl={"/assets/polaroid/polaroid2.jpg"}
            rotation={20}
            borderColor={"#2850A0"}
            stickers={[
              {
                imageUrl: "/assets/stars/star-1.png",
                x: "-17%", // move left-right
                y: "-7%", // move top-bottom
                size: "70px",
                zIndex: 2,
              },
              {
                imageUrl: "assets/tape/tape-2.png",
                x: "30%", // move left-right
                y: "-5%", // move top-bottom
                size: "100px",
                zIndex: 2,
              },
            ]}
          />
        </SecondPolaroid>
        <ThirdPolaroid>
          <Polaroid
            imageUrl={"/assets/polaroid/polaroid3.jpg"}
            rotation={-10}
            borderColor={"#F0A000"}
            stickers={[
              {
                imageUrl: "assets/stars/star-2.png",
                x: "-17%", // move left-right
                y: "60%", // move top-bottom
                size: "70px",
                zIndex: 2,
              },
              {
                imageUrl: "assets/tape/tape-3.png",
                x: "-14%", // move left-right
                y: "88%", // move top-bottom
                size: "100px",
                zIndex: 2,
                rotate: 30,
              },
              {
                imageUrl: "assets/tape/tape-3.png",
                x: "70%", // move left-right
                y: "-5%", // move top-bottom
                size: "100px",
                zIndex: 2,
              },
            ]}
          />
        </ThirdPolaroid>
      </SmallQuadrantContainer>
    </BoxContainer>
  );
};

export default PolaroidContainer;
