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
import Image from "next/image";
import NavBarLogo from "public/assets/navbar_logo.svg";

const NavBar = () => {
  const [isNavBarVisible, setNavBarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useMobileDetect();
  const [mobileMenuNode, setMobileMenuNode] = useState<HTMLSpanElement | null>(
    null
  );

  const [hamburgerNode, setHamburgerNode] = useState<HTMLDivElement | null>(
    null
  );

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
      if (scrollY < 70) {
        setNavBarVisible(true);
        return;
      }

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
    const handleClickOutside = (event: any) => {
      console.log(isMenuOpen);
      if (
        isMenuOpen &&
        mobileMenuNode &&
        !mobileMenuNode.contains(event.target) &&
        !hamburgerNode?.contains(event.target)
      ) {
        console.log("closing");
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

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
          <Logo onClick={() => scrollToSection("start")}>
            <Image src={NavBarLogo} alt="UofTHacks Logo" />
          </Logo>
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
                <NavLink onClick={() => scrollToSection("footer")}>
                  <Inter>CONTACT US</Inter>
                </NavLink>
              </NavLinkItem>
            </div>
            <HamburgerMenu
              ref={(node) => setHamburgerNode(node)}
              mobile={isMobile}
              onClick={toggleMenu}
            >
              ☰
            </HamburgerMenu>
          </NavLinks>
        </NavigationBar>
      </NavigationContainer>
      {isMobile && (
        <span ref={(node) => setMobileMenuNode(node)}>
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
                  <Inter style={MobileInterStyle()}>STATISTICS</Inter>
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
                <NavLink onClick={() => scrollToSection("footer")}>
                  <Inter style={MobileInterStyle()}>CONTACT US</Inter>
                </NavLink>
              </NavLinkItem>
            </MobileNavLinkItem>
          </MobileMenu>
        </span>
      )}
    </>
  );
};
export default NavBar;
