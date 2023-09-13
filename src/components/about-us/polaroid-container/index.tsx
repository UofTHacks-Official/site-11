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
          imageUrl={"/assets/polaroid/polaroid-1.png"}
          borderColor={"#A050A0"}
          stickers={[
            {
              imageUrl: "/stars/star12.png",
              x: "-5%", // move left-right
              y: "-5%", // move top-bottom
              size: "40px",
              zIndex: 2,
              opacity: 0.5,
            },
          ]}
        />
      </FirstPolaroid>
      <SmallQuadrantContainer>
        <SecondPolaroid>
          <Polaroid
            imageUrl={"/assets/polaroid/polaroid-2.png"}
            rotation={20}
            borderColor={"#2850A0"}
            stickers={[
              {
                imageUrl: "/stars/star14.png",
                x: "-17%", // move left-right
                y: "-7%", // move top-bottom
                size: "70px",
                zIndex: 2,
              },
            ]}
          />
        </SecondPolaroid>
        <ThirdPolaroid>
          <Polaroid
            imageUrl={"/assets/polaroid/polaroid-3.png"}
            rotation={-10}
            borderColor={"#F0A000"}
            stickers={[
              {
                imageUrl: "/stars/star4.png",
                x: "-7%", // move left-right
                y: "50%", // move top-bottom
                size: "30px",
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
