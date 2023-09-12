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
      To celebrate this milestone, we will be even bigger and better than ever
      before! Over 600 innovators, developers, designers, and entrepreneurs will
      participate in a 36-hour competition entirely in-person, where they will
      build unique and impactful projects.
      <br />
      <br />
      We strive to provide a space where hackers can discover their passions,
      and we want your support in helping these hackers shape the future!
    </span>
  );

  return (
    <AboutUsContainer>
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
