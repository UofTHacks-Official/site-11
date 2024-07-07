import { useMobileDetect } from "@/hooks/useMobileDetect";
import { AboutUsContainer } from "./index.styles";
import AboutUsDesktop from "@/components/about-us/desktop";
import AboutUsMobile from "@/components/about-us/mobile";

const AboutUs = () => {
  const isMobile = useMobileDetect();

  const aboutUsDescription = (
    <span>
      Canada's first student-run hackathon, UofTHacks, will be back for its 11th
      consecutive year!
      <br />
      <br />
      Our event brings together over 500 innovators, developers, designers, and
      entrepreneurs for a memorable 36-hour in-person hackathon, where they
      collaboratively craft unique and meaningful projects.
      <br />
      <br />
      At UofTHacks, we strive to provide a space where everyone feels supported,
      empowered, and encouraged to transform their dreams into reality!
    </span>
  );

  return (
    <AboutUsContainer id="about-us">
      {isMobile ? (
        <AboutUsMobile
          aboutUsHeader={["About", "us"]}
          aboutUsDescription={aboutUsDescription}
        />
      ) : (
        <AboutUsDesktop
          aboutUsHeader={["About", "us"]}
          aboutUsDescription={aboutUsDescription}
        />
      )}
    </AboutUsContainer>
  );
};

export default AboutUs;
