import { LandingPageContainer } from "./index.styles";
import LandingBanner from "@/components/landing-banner";
const LandingPage = () => {
  return (
    <LandingPageContainer>
      <LandingBanner
        mainTitle="UofTHacks 11"
        subTitle="JANUARY 26-28, 2024"
        appsOpen={false}
      />
    </LandingPageContainer>
  );
};

export default LandingPage;
