import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Inter from "@/components/inter";
import {
  NavigationContainer,
  NavigationBar,
  Logo,
  NavLinks,
  NavLinkItem,
  NavLink,
  HamburgerMenu,
  MobileMenu,
  MobileNavLinkItem,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
const NavBar = () => {
  const [isNavBarVisible, setNavBarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMobileDetect();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [prevScrollY, setPrevScrollY] = useState(0); // Track previous scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > prevScrollY ? "down" : "up";

      // Determine visibility based on scroll direction
      if (scrollDirection === "down") {
        setNavBarVisible(false);
        setIsMenuOpen(false);
      } else {
        setNavBarVisible(true);
      }

      setPrevScrollY(scrollY); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setNavBarVisible(false);
      } else {
        setNavBarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const MobileInterStyle = () => ({
    fontSize: "20px",
  });

  return (
    <>
      <NavigationContainer open={isNavBarVisible}>
        <NavigationBar>
          <Logo>LOGO</Logo>
          <NavLinks>
            <div style={{ display: isMobile ? "none" : "flex" }}>
              <NavLinkItem>
                <NavLink onClick={() => scrollToSection("about-us")}>
                  <Inter>ABOUT US</Inter>
                </NavLink>
              </NavLinkItem>
              <NavLinkItem>
                <NavLink onClick={() => scrollToSection("statistics")}>
                  <Inter>STATISTICS</Inter>
                </NavLink>
              </NavLinkItem>
              <NavLinkItem>
                <NavLink onClick={() => scrollToSection("sponsors")}>
                  <Inter>SPONSORS</Inter>
                </NavLink>
              </NavLinkItem>
              <NavLinkItem>
                <NavLink onClick={() => scrollToSection("faq")}>
                  <Inter>FAQ</Inter>
                </NavLink>
              </NavLinkItem>
              <NavLinkItem>
                <NavLink onClick={() => scrollToSection("contact-us")}>
                  <Inter>CONTACT US</Inter>
                </NavLink>
              </NavLinkItem>
            </div>
            <HamburgerMenu mobile={isMobile} onClick={toggleMenu}>
              ☰
            </HamburgerMenu>
          </NavLinks>
        </NavigationBar>
      </NavigationContainer>
      {isMobile && (
        <MobileMenu open={isMenuOpen}>
          <MobileNavLinkItem>
            <NavLinkItem>
              <NavLink onClick={() => scrollToSection("about-us")}>
                <Inter style={MobileInterStyle()}>ABOUT US</Inter>
              </NavLink>
            </NavLinkItem>
          </MobileNavLinkItem>
          <MobileNavLinkItem>
            <NavLinkItem>
              <NavLink onClick={() => scrollToSection("statistics")}>
                <Inter>STATISTICS</Inter>
              </NavLink>
            </NavLinkItem>
          </MobileNavLinkItem>
          <MobileNavLinkItem>
            <NavLinkItem>
              <NavLink onClick={() => scrollToSection("sponsors")}>
                <Inter style={MobileInterStyle()}>SPONSORS</Inter>
              </NavLink>
            </NavLinkItem>
          </MobileNavLinkItem>
          <MobileNavLinkItem>
            <NavLinkItem>
              <NavLink onClick={() => scrollToSection("faq")}>
                <Inter style={MobileInterStyle()}>FAQ</Inter>
              </NavLink>
            </NavLinkItem>
          </MobileNavLinkItem>
          <MobileNavLinkItem>
            <NavLinkItem>
              <NavLink onClick={() => scrollToSection("contact-us")}>
                <Inter style={MobileInterStyle()}>CONTACT US</Inter>
              </NavLink>
            </NavLinkItem>
          </MobileNavLinkItem>
        </MobileMenu>
      )}
    </>
  );
};
export default NavBar;
