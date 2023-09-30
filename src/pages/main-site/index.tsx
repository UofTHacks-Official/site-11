import NavBar from "@/components/navbar";
import LandingPage from "@/modules/landing-page";
import AboutUs from "@/modules/about-us";
import Sponsors from "@/modules/Sponsorship";
import FAQ from "@/modules/FAQ";
import Stats from "@/modules/stats";
import Footer from "@/modules/footer";

const Site11 = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9" }}>
      <NavBar />
      <LandingPage />
      <AboutUs />
      <Stats />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Site11;
