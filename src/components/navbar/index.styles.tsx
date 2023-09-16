import styled from "styled-components";

type HamburgerProps = {
  mobile?: boolean | null;
};

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 100px;
  position: fixed;
  top: 0;
  width: 100%;
  transition: top 0.3s; /* Add smooth transition effect */
  z-index: 1000; /* Ensure it appears above other content */
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavLinkItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ff5733; /* Change color on hover as needed */
  }
`;

const HamburgerMenu = styled.div<HamburgerProps>`
  display: none; // Hide the hamburger menu icon by default
  cursor: pointer;
  ${(props) =>
    props.mobile
      ? `
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 24px;
        z-index: 1001;
      `
      : ""}
`;

export { NavigationBar, Logo, NavLinks, NavLinkItem, NavLink, HamburgerMenu };
