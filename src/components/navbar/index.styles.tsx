import styled from "styled-components";

type HamburgerProps = {
  mobile?: boolean | null;
};

type NavbarProps = {
  mobile?: boolean | null;
};

type MobileMenuProps = {
  open?: boolean | null;
};

const NavigationBar = styled.nav<NavbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.mobile
      ? `
    margin: 40px 0;
  `
      : `
      margin: 40px 10%;
  `}
  position: fixed;
  top: 0;
  width: 80%;
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
  cursor: pointer;
`;

const NavLinkItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: grey;
  }
`;

const HamburgerMenu = styled.div<HamburgerProps>`
  cursor: pointer;
  ${(props) =>
    props.mobile
      ? `
        position: absolute;
        top: 0px;
        justify-content: center;
        font-size: 20px;
        z-index: 1001;
      `
      : `display: none;`}
`;

const MobileMenu = styled.div<MobileMenuProps>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%; // This will position the menu right below the NavBar
  left: 0;
  width: 100%;
  z-index: 1000; // This ensures the menu appears above other elements
`;

const MobileNavLinkItem = styled(NavLinkItem)`
  width: 100%;
  padding: 10px 0; // Add some padding for better spacing
  list-style-type: none;
`;

export {
  NavigationBar,
  Logo,
  NavLinks,
  NavLinkItem,
  NavLink,
  HamburgerMenu,
  MobileMenu,
  MobileNavLinkItem,
};
