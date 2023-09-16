import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Inter from "@/components/inter";
import {
  NavigationBar,
  Logo,
  NavLinks,
  NavLinkItem,
  NavLink,
  HamburgerMenu,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
const NavBar = () => {
  const [isNavBarVisible, setNavBarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMobileDetect();

  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Add an event listener to the window's scroll event
    const handleScroll = () => {
      // Hide the navigation bar when scrolling down, show it when scrolling up
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavBarVisible(false);
      } else {
        setNavBarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Conditionally render the navigation bar based on visibility */}
      {isNavBarVisible && (
        <NavigationBar>
          <Logo>LOGO</Logo>
          <HamburgerMenu onClick={toggleMenu}>
            {isMenuOpen ? "☰" : "≡"}
          </HamburgerMenu>
          <NavLinks
            style={{ display: isMobile && isMenuOpen ? "none" : "flex" }}
          >
            <NavLinkItem>
              <NavLink href="#" onClick={() => scrollToSection("about-us")}>
                <Inter>ABOUT US</Inter>
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink href="#" onClick={() => scrollToSection("sponsors")}>
                <Inter>SPONSORS</Inter>
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink href="#" onClick={() => scrollToSection("faq")}>
                <Inter>FAQ</Inter>
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink href="#" onClick={() => scrollToSection("contact-us")}>
                <Inter>CONTACT US</Inter>
              </NavLink>
            </NavLinkItem>
          </NavLinks>
        </NavigationBar>
      )}
    </>
  );
};
export default NavBar;
