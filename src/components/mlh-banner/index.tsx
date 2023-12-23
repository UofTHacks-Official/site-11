import { MLHContainer, MLHWrapper } from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";

const MLHBanner = () => {
  const isMobile = useMobileDetect();
  return (
    <MLHContainer
      id="mlh-trust-badge"
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=blue"
      target="_blank"
      isMobile={isMobile}
    >
      <MLHWrapper />
    </MLHContainer>
  );
};

export default MLHBanner;
