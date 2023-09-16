import { LandingPageContainer } from "./index.styles";
import LandingBanner from "@/components/landing-banner";
const LandingPage = () => {
  return (
    <LandingPageContainer id="landing-page">
      <LandingBanner
        mainTitle="UofTHacks 11"
        subTitle="JANUARY 2024"
        appsOpen={false}
      />
    </LandingPageContainer>
  );
};

export default LandingPage;
