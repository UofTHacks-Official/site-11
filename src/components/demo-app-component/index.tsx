import { MainContainer } from "./index.styles";
import LandingBanner from "../landing-banner"

type DemoAppProps = {
  isMobile: boolean | null;
};

const DemoAppComponent = ({ isMobile }: DemoAppProps) => {
  return (
    <MainContainer>
      <h1>{isMobile ? <span>Mobile</span> : <span>Desktop</span>}</h1>
      <LandingBanner mainTitle="UofTHacks 11" subTitle="JANUARY 26-28, 2024" />
    </MainContainer>
  );
};

export default DemoAppComponent;
