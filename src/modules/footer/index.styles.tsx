import styled from "styled-components";
import Inter from "@/components/inter";

type WrapperProps = {
  mobile?: boolean | null;
};
const Wrapper = styled.footer<WrapperProps>`
  display: flex;
  justify-content: space-around;
  min-height: 2.5rem;
  width: 100%;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  padding: 3rem 0;
  column-gap: 50px;
  row-gap: 25px;
`;

const StyledInter = styled(Inter)`
  text-align: left;
  font-size: 16px;
  padding: 0.62rem;
  color: #282828;
  font-style: normal;
  font-weight: 400;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--black, #282828);
  &:hover {
    cursor: pointer;
    color: grey;
    transition: 0.3s ease-out all;
  }
`;

const Icon = styled.a`
  &:hover {
    cursor: pointer;
    transition: 0.3s ease-out all;
  }
`;

export { Wrapper, Links, Link, StyledInter, Socials, Icon };
