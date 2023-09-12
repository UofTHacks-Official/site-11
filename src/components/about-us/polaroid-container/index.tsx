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
          imageUrl={"/stars/star4.png"}
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
            imageUrl={"/stars/star5.png"}
            rotation={20}
            borderColor={"#2850A0"}
          />
        </SecondPolaroid>
        <ThirdPolaroid>
          <Polaroid
            imageUrl={"/stars/star6.png"}
            rotation={-10}
            borderColor={"#F0A000"}
          />
        </ThirdPolaroid>
      </SmallQuadrantContainer>
    </BoxContainer>
  );
};

export default PolaroidContainer;
