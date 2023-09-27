import LandingPage from "@/modules/landing-page";
import AboutUs from "@/modules/about-us";
import Sponsors from "@/modules/Sponsorship";
import FAQ from "@/modules/FAQ";
import Stats from "@/modules/stats";

const Site11 = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <LandingPage />
      <AboutUs />
      <Stats />
      <Sponsors />
      <FAQ />
    </div>
  );
};

export default Site11;
