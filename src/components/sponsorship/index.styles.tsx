// components/sponsors/index.styles.tsx
import Image from "next/image";
import styled from "styled-components";

// Style for the sponsors container
const Wrapper = styled.section`
  display: flex;
  height: 100%;
  width: 100%;
`;

// Style for the sponsors grid
type SponsorsGridProps = {
  mobile?: boolean | null;
};
const SponsorsGrid = styled.div<SponsorsGridProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  // border: 1px solid var(--black, #282828);

  backdrop-filter: blur(20px);

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
    /* Add other hover styles as needed */
  }
`;

const RowStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  //   max-height: 18.125 rem;
  //   min-height: 187.4px;

  //   background: red;
  justify-content: center;
  transition: all 0.3s ease 0s;
  gap: 1rem;
`;

//  const PlatinumStyle = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   place-content: center;
//   box-sizing: border-box;
//   box-shadow: 0px 4px 12px -1px rgba(0, 0, 0, 0.25);
//   min-height: 187.4px;
//   max-width: 100vw;
//   height: 100vh;
//   background: #d9d9d9;

//   transition: all 0.3s ease 0s;
//   cursor: pointer;

//   & > a {
//     transition: all 0.3s ease 0s;
//     max-width: 150px;
//     min-width: 50px;
//   }

//   & > a:hover {
//     transition: all 0.3s ease 0s;
//     transform: scale(1.1);
//   }
// `;

type ImageProps = {
  mobile?: boolean | null;
};

type TierProps = {
  width?: string;
  height?: string;
  maxHeight?: string;
};

const StyledImage = styled(Image)<ImageProps>`
  padding: ${(props) => (props.mobile ? "0.5rem;" : "4vw")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
`;

const TierStyle = styled.div<TierProps>`
  min-width: ${(props) => props.width};
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
  background: #d9d9d9;
  box-shadow: 0px 4px 0px 0px #282828;
  overflow: hidden;
`;

export { Wrapper, SponsorsGrid, SponsorItem, RowStyle, StyledImage, TierStyle };
