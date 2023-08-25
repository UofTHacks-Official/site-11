import { MainContainer } from "./index.styles";
import LandingBanner from "../landing-banner"
import { useMobileDetect } from "@/hooks/useMobileDetect";

// This component is just a demo component
// You can delete it and create your own component
const CreateNewComponent = () => {
  const isMobile = useMobileDetect();

  return (
    <MainContainer>
      <h1>{isMobile ? <span>Mobile</span> : <span>Desktop</span>}</h1>
      <LandingBanner mainTitle="UofTHacks 11" subTitle="JANUARY 26-28, 2024" appsOpen={false} />
    </MainContainer>
  );
};

export default CreateNewComponent;
