import DemoApp from "./demo";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const App = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const widthThreshold = 700;
  const heightThreshold = 430;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= widthThreshold ||
          window.innerHeight <= heightThreshold
      );
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile != null) return <DemoApp isMobile={isMobile} />;
};

export default App;
