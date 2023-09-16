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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  return (
    <>
      {isNavBarVisible && (
        <NavigationBar>
          <Logo>LOGO</Logo>
          <NavLinks>
            <div style={{ display: isMobile && isMenuOpen ? "none" : "flex" }}>
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
            </div>
            <NavLinkItem>
              <HamburgerMenu mobile={isMobile} onClick={toggleMenu}>
                ☰
              </HamburgerMenu>
            </NavLinkItem>
          </NavLinks>
        </NavigationBar>
      )}
    </>
  );
};
export default NavBar;
