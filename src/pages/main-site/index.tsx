import NavBar from "@/components/navbar";
import LandingPage from "@/modules/landing-page";
import EmailForm from "@/modules/email-form";
import AboutUs from "@/modules/about-us";
import Sponsors from "@/modules/Sponsorship";
import FAQ from "@/modules/FAQ";
import Stats from "@/modules/stats";
import PhotoCarousel from "@/modules/photo-carousel";
import Footer from "@/modules/footer";
import styled from "styled-components";
import MLHBanner from "@/components/mlh-banner";

const MainContainer = styled.div`
  background-color: #f9f9f9;
  background-image: url("/backgroundtile.svg");
  opacity: 1;
  overflow: hidden;
`;
const Site11 = () => {
  return (
    <MainContainer id="start">
      <MLHBanner />
      <NavBar />
      <LandingPage />
      <EmailForm />
      <AboutUs />
      <PhotoCarousel />
      <Stats />
      <Sponsors />
      <FAQ />
      <Footer />
    </MainContainer>
  );
};

export default Site11;
