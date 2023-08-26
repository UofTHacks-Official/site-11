import { MainContainer, LandingPage, AboutUsPage, SponsorsPage, FAQPage } from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";

// This component is just a demo component
// You can delete it and create your own component
const CreateNewComponent = () => {
  const isMobile = useMobileDetect();

  return (
    <>
    <LandingPage>
      <h1>
        {isMobile ? <span>Mobile</span> : <span>Desktop</span>}
        
      </h1>
      <h1>
        Landing Page
      </h1>
    </LandingPage>
    <div>
      <AboutUsPage>
        <h1>
          <span>
            About Us Page
          </span>
        </h1>
      </AboutUsPage>
      <SponsorsPage>
        <h1>
          <span>
            Sponsors Page
          </span>
        </h1>
      </SponsorsPage>
      <FAQPage>
        <h1>
          <span>
            FAQ Page
          </span>
        </h1>
      </FAQPage>
    </div>
  </>
  );
};

export default CreateNewComponent;
