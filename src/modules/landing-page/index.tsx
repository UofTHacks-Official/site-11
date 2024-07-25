import { LandingPageContainer } from "./index.styles";
import LandingBanner from "@/components/landing-banner";
const LandingPage = () => {
  return (
    <LandingPageContainer id="landing-page">
      <LandingBanner
        mainTitle="UofTHacks 11"
        subTitle="JANUARY 26-28, 2024 | In-person event"
        subTitle2="UoftHacks 12 coming soon!"
        appsOpen={false}
      />
    </LandingPageContainer>
  );
};

export default LandingPage;
