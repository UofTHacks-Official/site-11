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

const NavigationContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #f9f9f9;
  position: fixed;
  z-index: 1000;
`;
const NavigationBar = styled.nav<NavbarProps>`
  display: flex;
  position: fixed;
  height: 40px;
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
  top: 0;
  width: 80%;
  transition: top 0.3s;
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
  cursor: pointer;
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
        top: 0;
        justify-content: center;
        font-size: 30px;
        z-index: 1001;
      `
      : `display: none;`}
`;

const MobileMenu = styled.div<MobileMenuProps>`
  display: ${(props) => (props.open ? "block" : "none")};

  position: absolute;
  background-color: #f0f0f0;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const MobileNavLinkItem = styled(NavLinkItem)`
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 30px;
  width: 100%;
  padding: 10px 0;
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
  NavigationContainer,
};
