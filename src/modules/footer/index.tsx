import React from "react";
import { Instagram } from "../../../public/assets/footer-icons/instagram";
import { Twitter } from "../../../public/assets/footer-icons/twitter";
import { LinkedIn } from "../../../public/assets/footer-icons/linkedin";
import { useMobileDetect } from "@/hooks/useMobileDetect";

import {
  Wrapper,
  Links,
  Link,
  Socials,
  StyledInter,
  Icon,
} from "./index.styles";

const Footer = () => {
  const detectMobile = useMobileDetect();
  return (
    <Wrapper mobile={detectMobile}>
      <StyledInter>
        <Links>
          <Link
            href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf "
            target="_blank"
            rel="noopener"
            color="#0078d4"
          >
            MLH Code of Conduct
          </Link>

          <Link
            href="https://x.uofthacks.com/"
            target="_blank"
            rel="noopener"
            color="#0078d4"
          >
            2023 Site
          </Link>
          <Link
            href="https://github.com/UofTHacks-Official"
            target="_blank"
            rel="noopener"
            color="#0078d4"
          >
            GitHub
          </Link>
        </Links>
      </StyledInter>
      <Socials>
        <Icon
          href="https://www.instagram.com/uofthacks"
          target="_blank"
          rel="noopener"
        >
          <Instagram />
        </Icon>
        <Icon
          href="https://www.twitter.com/uofthacks"
          target="_blank"
          rel="noopener"
        >
          <Twitter />
        </Icon>
        <Icon
          href="https://www.twitter.com/uofthacks"
          target="_blank"
          rel="noopener"
        >
          <LinkedIn />
        </Icon>
      </Socials>
    </Wrapper>
  );
};

export default Footer;
