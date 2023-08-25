import { useState, useEffect } from "react";

// Custom hook to detect mobile devices
export const useMobileDetect = (): boolean | null => {
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

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
