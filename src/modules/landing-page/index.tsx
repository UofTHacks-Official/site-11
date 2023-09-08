import { LandingPageContainer } from "./index.styles";
import LandingBanner from "@/components/landing-banner";
const LandingPage = () => {
  return (
    <LandingPageContainer>
      <LandingBanner
        mainTitle="Test Deploy"
        subTitle="Test2"
        appsOpen={false}
      />
    </LandingPageContainer>
  );
};

export default LandingPage;
