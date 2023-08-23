import { MainContainer } from "./index.styles";
import LandingBanner from "../landing-banner/LandingBanner"

type DemoAppProps = {
  isMobile: boolean | null;
};

const DemoAppComponent = ({ isMobile }: DemoAppProps) => {
  return (
    <MainContainer>
      <h1>{isMobile ? <span>Mobile</span> : <span>Desktop</span>}</h1>
      <LandingBanner/>
    </MainContainer>
  );
};

export default DemoAppComponent;
