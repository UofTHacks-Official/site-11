import { LandingPageContainer } from "./index.styles";
import Inter from "@/components/inter";
import LandingBanner from "@/components/landing-banner";
const LandingPage = () => {
  const sponsorLink = "mailto:sponsors@uofthacks.com";

  const handleButtonClick = () => {
    window.location.href = sponsorLink;
  };

  const interCustomStyles = {
    color: "var(--Blue, #2850A0)",
    textAlign: "right",
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 600,
    textDecoration: "underline",
    verticalAlign: "baseline",
    lineHeight: "normal",
    marginRight: "10%",
    marginTop: "15px",
    cursor: "pointer",
  };

  return (
    <LandingPageContainer id="landing-page">
      <LandingBanner
        mainTitle="UofTHacks 11"
        subTitle="JANUARY 26-28, 2024 | In-person event"
        appsOpen={true}
      />
      <span onClick={() => handleButtonClick()}>
        <Inter style={interCustomStyles}>Interested in Sponsoring?</Inter>
      </span>
    </LandingPageContainer>
  );
};

export default LandingPage;
