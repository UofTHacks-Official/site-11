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
  isSpecial?: boolean;
  customClass?: string;
  width?: number;
  height?: number;
}> = ({ href, src, name, customClass, isSpecial }) => {
  const isMobile = useMobileDetect();
  return (
    <SponsorItem href={href} target="_blank" rel="noopener">
      <StyledImage src={src} alt={name} layout="responsive" mobile={isMobile} isSpecial={isSpecial} className={isSpecial ? 'special-logo': ''}/>
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
          <Sponsor href={s.url} src={s.img} name={s.name} key={index} customClass='special-logo'/>
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
        {/* <TierComponent
          data={sponsorsData.title}
          width={"100%"}
          height={isMobile ? "20vw" : "min(300px, 20vw)"}
          height={isMobile ? "20vw" : "min(300px, 20vw)"}
        /> */}
        {/* <TierComponent
          data={sponsorsData.diamond}
          width={"75%"}
          height={isMobile ? "19vw" : "min(290px, 19vw)"}
          height={isMobile ? "19vw" : "min(290px, 19vw)"}
        /> */}
        {/* <TierComponent
          data={sponsorsData.gold}
          width={"50%"}
          height={isMobile ? "18vw" : "min(240px, 18vw)"}
          maxHeight={isMobile ? "18vw" : "min(240px, 18vw)"}
          minWidth={isMobile ? "50%" : "20vw"}
        />
        <TierComponent
          data={sponsorsData.silver}
          width={"30%"}
          height={isMobile ? "16vw" : "min(200px, 16vw)"}
          maxHeight={isMobile ? "16vw" : "min(200px, 16vw)"}
          minWidth={isMobile ? "30%" : "16vw"}
        />
        <TierComponent
          data={sponsorsData.bronze}
          width={"23%"}
          height={isMobile ? "14vw" : "min(200px, 12vw)"}
          maxHeight={isMobile ? "14vw" : "min(200px, 12vw)"}
          minWidth={isMobile ? "23%" : "14vw"}
        />  */}
        <TierComponent
          data={sponsorsData.inkind}
          width={"23%"}
          height={isMobile ? "12vw" : "min(190px, 12vw)"}
          maxHeight={isMobile ? "12vw" : "min(190px, 12vw)"}
          minWidth={isMobile ? "23%" : "14vw"}
        />
      </SponsorsGrid>
    </Wrapper>
  );
};

export default Sponsors;
