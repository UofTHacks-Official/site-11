import { useState, useEffect } from "react";

// Custom hook to detect mobile devices
export const useMobileDetect = (
  widthThreshold: number = 875
): boolean | null => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= widthThreshold);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
