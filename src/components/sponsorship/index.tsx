// components/sponsors/index.tsx
import React from "react";
import { StaticImageData } from "next/image";
import {
  Wrapper,
  SponsorsGrid,
  SponsorItem,
  RowStyle,
  DiamondStyle,
  PlatinumStyle,
  GoldStyle,
  SilverStyle,
  BronzeStyle,
  StyledImage,
  TierStyle,
} from "./index.styles";

// Import sponsor images
import Protocol from "public/assets/sponsors/protocol-labs.svg";
import Cohere from "public/assets/sponsors/cohere.svg";
import Accenture from "public/assets/sponsors/Accenture.svg";
import EngSoc from "public/assets/sponsors/EngSoc.svg";
import UofTCS from "public/assets/sponsors/UofTCS.svg";
import IBM from "public/assets/sponsors/IBM.svg";
import FDMGroup from "public/assets/sponsors/FDM.svg";
import echo3D from "public/assets/sponsors/echo3D.webp";
import Voiceflow from "public/assets/sponsors/Voiceflow.webp";
import AMD from "public/assets/sponsors/AMD.svg";
import XYZ from "public/assets/sponsors/XYZ.svg";
import { useMobileDetect } from "@/hooks/useMobileDetect";

// Define sponsor data
const sponsorsData = {
  diamond: [
    {
      name: "Protocol Labs",
      url: "https://protocol.ai/",
      img: Protocol,
    },
  ],
  platinum: [
    {
      name: "echo3D",
      url: "https://www.echo3d.com/",
      img: Cohere,
    },
  ],
  gold: [
    {
      name: "Accenture",
      url: "https://www.accenture.com/",
      img: Accenture,
    },
    {
      name: "EngSoc",
      url: "https://skule.ca/",
      img: EngSoc,
    },
    {
      name: "University of Toronto Department of Computer Science",
      url: "https://web.cs.toronto.edu/",
      img: UofTCS,
    },
  ],
  silver: [
    {
      name: "IBM",
      url: "https://www.ibm.com/",
      img: IBM,
    },
  ],
  bronze: [
    {
      name: "FDM Group",
      url: "https://www.fdmgroup.com/",
      img: FDMGroup,
    },
    {
      name: "AMD",
      url: "https://www.amd.com/",
      img: AMD,
    },
    {
      name: "echo3D",
      url: "https://www.echo3d.com/",
      img: echo3D,
    },
    {
      name: "Voiceflow",
      url: "https://www.voiceflow.com/",
      img: Voiceflow,
    },
    {
      name: "XYZ",
      url: "https://www.gen.xyz",
      img: XYZ,
    },
  ],
};

// Sponsor Item's image component
const Sponsor: React.FC<{
  href: string;
  src: StaticImageData;
  name: string;
  width?: number;
  height?: number;
}> = ({ href, src, name }) => {
  const isMobile = useMobileDetect();
  return (
    <SponsorItem href={href} target="_blank" rel="noopener">
      <StyledImage src={src} alt={name} layout="responsive" mobile={isMobile} />
    </SponsorItem>
  );
};

// Sponsor tier components

type TierComponentProps = {
  data: typeof sponsorsData.diamond;
  width: string;
  height: string;
  maxHeight?: string;
};

const TierComponent: React.FC<TierComponentProps> = ({
  data,
  width,
  height,
  maxHeight,
}) => {
  return (
    <RowStyle>
      {data.map((s, index) => (
        <TierStyle
          width={width}
          height={height}
          maxHeight={maxHeight}
          key={index}
        >
          <Sponsor href={s.url} src={s.img} name={s.name} key={index} />
        </TierStyle>
      ))}
    </RowStyle>
  );
};

const DiamondTier: React.FC = () => {
  const list = sponsorsData.diamond.map((s, index) => (
    <RowStyle>
      <DiamondStyle key={index}>
        <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
      </DiamondStyle>
    </RowStyle>
  ));
  return sponsorsData.diamond.length > 0 ? <> {list}</> : null;
};

const PlatinumTier: React.FC = () => {
  const list = sponsorsData.platinum.map((s, index) => (
    <PlatinumStyle key={index}>
      <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
    </PlatinumStyle>
  ));
  return sponsorsData.platinum.length > 0 ? <> {list}</> : null;
};

const GoldTier: React.FC = () => {
  const list = sponsorsData.gold.map((s, index) => (
    <GoldStyle key={index}>
      <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
    </GoldStyle>
  ));
  return sponsorsData.gold.length > 0 ? <> {list}</> : null;
};

const SilverTier: React.FC = () => {
  const list = sponsorsData.silver.map((s, index) => (
    <SilverStyle key={index}>
      <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
    </SilverStyle>
  ));
  return sponsorsData.silver.length > 0 ? <> {list}</> : null;
};

const BronzeTier: React.FC = () => {
  const list = sponsorsData.bronze.map((s, index) => (
    <BronzeStyle key={index}>
      <Sponsor key={index} href={s.url} src={s.img} name={s.name} />
    </BronzeStyle>
  ));
  return sponsorsData.bronze.length > 0 ? <> {list}</> : null;
};

// Page component
const Sponsors: React.FC = () => {
  const isMobile = useMobileDetect();
  return (
    <Wrapper id="Sponsors">
      <SponsorsGrid mobile={isMobile}>
        <TierComponent
          data={sponsorsData.diamond}
          width={"100%"}
          height={"19vw"}
          maxHeight={"290px"}
        />
        <TierComponent
          data={sponsorsData.platinum}
          width={"50%"}
          height={"19vw"}
          maxHeight={"290px"}
        />
        <TierComponent
          data={sponsorsData.gold}
          width={"30%"}
          height={"16vw"}
          maxHeight={"250px"}
        />
        <RowStyle>
          <TierComponent
            data={sponsorsData.silver}
            width={"25%"}
            height={"15vw"}
            maxHeight={"200px"}
          />
        </RowStyle>
        <RowStyle>
          <TierComponent
            data={sponsorsData.bronze}
            width={"15%"}
            height={"10vw"}
          />
        </RowStyle>
      </SponsorsGrid>
    </Wrapper>
  );
};

export default Sponsors;
