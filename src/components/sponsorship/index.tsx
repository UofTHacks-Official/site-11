// components/sponsors/index.tsx
import React from "react";
import { StaticImageData } from "next/image";
import {
  Wrapper,
  SponsorsGrid,
  SponsorItem,
  RowStyle,
  StyledImage,
  TierStyle,
} from "./index.styles";
import { useMobileDetect } from "@/hooks/useMobileDetect";
import { sponsorsData } from "@/components/sponsorship/sponsors-data";

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
  minWidth?: string;
};

const TierComponent: React.FC<TierComponentProps> = ({
  data,
  width,
  height,
  maxHeight,
  minWidth,
}) => {
  return (
    <RowStyle>
      {data.map((s, index) => (
        <TierStyle
          width={width}
          height={height}
          maxHeight={maxHeight}
          minWidth={minWidth}
          key={index}
        >
          <Sponsor href={s.url} src={s.img} name={s.name} key={index} />
        </TierStyle>
      ))}
    </RowStyle>
  );
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
          height={isMobile ? "19vw" : "min(200px, 19vw)"}
          maxHeight={"290px"}
        />
        <TierComponent
          data={sponsorsData.platinum}
          width={"50%"}
          height={isMobile ? "18vw" : "min(200px, 18vw)"}
          maxHeight={"290px"}
        />
        <TierComponent
          data={sponsorsData.gold}
          width={"30%"}
          height={isMobile ? "16vw" : "min(200px, 16vw)"}
          maxHeight={"250px"}
        />
        <TierComponent
          data={sponsorsData.silver}
          width={"23%"}
          height={isMobile ? "14vw" : "min(190px, 12vw)"}
          maxHeight={"200px"}
        />
        <TierComponent
          data={sponsorsData.bronze}
          width={"16.5%"}
          height={isMobile ? "10vw" : "min(150px, 10vw)"}
          maxHeight={"100px"}
          minWidth={isMobile ? "16.5%" : "max(16.5%, 200px)"}
        />
      </SponsorsGrid>
    </Wrapper>
  );
};

export default Sponsors;
