import styled from "styled-components";
import Inter from "../inter";
import Link from "next/link";

const StyledInter = styled(Inter)`
  text-align: left;
  font-size: 16px;
  padding: 0.62rem;
  color: #282828;
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: var(--black, #282828);
  &:hover {
    cursor: pointer;
    color: grey;
    transition: 0.3s ease-out all;
  }
`;

const LinksContainer = () => {
  return (
    <StyledInter>
      <Links
        href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf "
        target="_blank"
        rel="noopener"
        color="#0078d4"
      >
        MLH Code of Conduct
      </Links>

      <Links
        href="https://x.uofthacks.com/"
        target="_blank"
        rel="noopener"
        color="#0078d4"
      >
        2023 Site
      </Links>
      <Links
        href="https://github.com/UofTHacks-Official"
        target="_blank"
        rel="noopener"
        color="#0078d4"
      >
        GitHub
      </Links>
    </StyledInter>
  );
};

export default LinksContainer;
