import React from "react";
import { useMobileDetect } from "@/hooks/useMobileDetect";

import { Wrapper } from "./index.styles";
import { LinksContainer, SocialsContainer } from "@/components/footer";

const Footer = () => {
  const detectMobile = useMobileDetect();
  return (
    <Wrapper mobile={detectMobile}>
      <LinksContainer />
      <SocialsContainer />
    </Wrapper>
  );
};

export default Footer;
