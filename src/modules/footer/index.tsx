import React from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";

import { Wrapper } from "./index.styles";
import { LinksContainer, SocialsContainer } from "@/components/footer";
import Link from "next/link";

const Footer = () => {
  const detectMobile = useMobileDetect();
  return (
    <Wrapper mobile={detectMobile} id={"footer"}>
      <LinksContainer />
      <SocialsContainer />
    </Wrapper>
  );
};

export default Footer;
