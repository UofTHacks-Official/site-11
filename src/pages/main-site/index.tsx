import NavBar from "@/components/navbar";
import LandingPage from "@/modules/landing-page";
import AboutUs from "@/modules/about-us";
import Sponsors from "@/modules/Sponsorship";
import FAQ from "@/modules/FAQ";
import Stats from "@/modules/stats";
import Footer from "@/modules/footer";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #f9f9f9;
  background-image: url("/backgroundtile.svg");
  opacity: 1;
`;
const Site11 = () => {
  return (
    <MainContainer id="start">
      <NavBar />
      <LandingPage />
      <AboutUs />
      <Stats />
      <Sponsors />
      <FAQ />
      <Footer />
    </MainContainer>
  );
};

export default Site11;
