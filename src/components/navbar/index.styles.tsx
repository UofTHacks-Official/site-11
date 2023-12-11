import styled from "styled-components";

type HamburgerProps = {
  mobile?: boolean | null;
};

type NavContainerProps = {
  open?: boolean | null;
};
type NavbarProps = {
  mobile?: boolean | null;
};

type MobileMenuProps = {
  open?: boolean | null;
};

const NavigationContainer = styled.div<NavContainerProps>`
  transform: translateY(${(props) => (props.open ? "0" : "-100%")});
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 100px;
  background-color: #f9f9f9;
  position: fixed;
  z-index: 1000;
  overflow: hidden;
`;
const NavigationBar = styled.nav<NavbarProps>`
  display: flex;
  position: fixed;
  height: 40px;
  z-index: 1001;
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
  &:hover {
    cursor: pointer;
  }
`;

const NavLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const NavLinkItem = styled.li`
  margin-right: 20px;
  display: flex;
  align-items: center;
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

const LinkIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-top: 6px;
  align-self: center; 
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
        z-index: 1002;
      `
      : `display: none;`}
`;

const MobileMenu = styled.div<MobileMenuProps>`
  transform: translateY(${(props) => (props.open ? "0" : "-200%")});
  transition: transform 0.3s ease-in-out;

  position: fixed;
  background-color: #f0f0f0;
  top: 100px;
  left: 0;
  width: 100%;
  z-index: 999;
  overflow: hidden;
`;

const MobileNavLinkItem = styled(NavLinkItem)`
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 30px;
  width: 100%;
  padding: 10px 0;
  list-style-type: none;
`;

const PrimaryButtonContainer = styled.button`
  width: 100%;
  padding: 0.5rem;
  align-self: center; 
  justify-content: center;
  margin-top: -10px; 
  margin-bottom: auto;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid var(--black, #282828);
  background: var(--black, #282828);
  border-radius: 5px;
  border: 2px solid var(--Black, #282828);
  background: var(--Blue, #2850a0);
  /* Default Shadow */
  box-shadow: 0px 4px 0px 0px #282828;
  &:hover {
    transform: scale(1.05);
  }
`;

const PrimaryButtonTextContainer = styled.div`
  display: inline;
  text-transform: uppercase;
  color: var(--white, #f9f9f9);
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
  PrimaryButtonContainer,
  PrimaryButtonTextContainer,
  LinkIcon
};
