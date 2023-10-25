// components/sponsors/index.styles.tsx
import Image from "next/image";
import styled from "styled-components";

type SponsorsGridProps = {
  mobile?: boolean | null;
};

type ImageProps = {
  mobile?: boolean | null;
};

type TierProps = {
  width?: string;
  height?: string;
  maxHeight?: string;
  minWidth?: string;
};

// Style for the sponsors container
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  align-self: center;
  overflow: hidden;
  padding-bottom: 10px;
`;

// Style for the sponsors grid
const SponsorsGrid = styled.div<SponsorsGridProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${(props) => (props.mobile ? "0" : "50px")};
  gap: 1.25rem;
`;

// Style for individual sponsor items
const SponsorItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  &:hover {
    transition: all 0.3s ease 0s;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const RowStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  transition: all 0.3s ease 0s;
  gap: 1rem;
`;

const StyledImage = styled(Image)<ImageProps>`
  padding: ${(props) => (props.mobile ? "0.5rem;" : "3vw")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  overflow: hidden;
  object-fit: contain;
`;

const TierStyle = styled.div<TierProps>`
  min-width: ${(props) => (props.minWidth ? props.minWidth : props.width)};
  max-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : props.height)};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid var(--black, #282828);
  background: #e1ebff;
  box-shadow: 0px 4px 0px 0px #282828;
  overflow: hidden;
`;

export { Wrapper, SponsorsGrid, SponsorItem, RowStyle, StyledImage, TierStyle };
