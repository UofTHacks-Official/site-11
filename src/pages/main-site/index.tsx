import { useState, useEffect } from "react";
import NavBar from "@/components/navbar";
import LandingPage from "@/modules/landing-page";
import EmailForm from "@/modules/email-form";
import AboutUs from "@/modules/about-us";
import Sponsors from "@/modules/Sponsorship";
import FAQ from "@/modules/FAQ";
import Stats from "@/modules/stats";
import Footer from "@/modules/footer";
import Image from "next/image";
import NavBarLogo from "public/assets/navbar_logo.svg";

type Star = {
  x: number;
  y: number;
  id: number;
};
const StarIcon = ({ x, y }: Star) => {
  return (
    <div
      style={{
        position: "absolute",
        left: x - 12,
        top: y - 12,
        zIndex: 100,
      }}
    >
      <Image src={NavBarLogo} alt="navbar" />
    </div>
  );
};
const Site11 = () => {
  const [stars, setStars] = useState<Star[]>([]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setStars([]);
    }, 2000);
    return () => clearTimeout(timer);
  }, [stars]);
  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const newStar: Star = {
      x: event.clientX,
      y: event.clientY,
      id: Date.now(),
    };
    setStars([...stars, newStar]);
  };
  return (
    <div
      style={{ backgroundColor: "#f9f9f9" }}
      id="start"
      onMouseDown={handleMouseDown}
    >
      <NavBar />
      <LandingPage />
      <EmailForm />
      <AboutUs />
      <Stats />
      <Sponsors />
      <FAQ />
      <Footer />
      {stars.map((star) => (
        <StarIcon id={star.id} x={star.x} y={star.y} />
      ))}
    </div>
  );
};
export default Site11;
