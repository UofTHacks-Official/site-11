// components/sponsors/index.styles.tsx
import styled from "styled-components";

// Style for the sponsors container
export const Wrapper = styled.section`
  display: flex;
  //   min-height: 100%;
  min-height: min-content;
  height: 100%;
  width: 100%;
  //   border: 1px solid var(--black, #282828);
  //   background: green;

  scroll-margin-top: 12vh;
`;

// Style for the sponsors grid
export const SponsorsGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: white;
  box-sizing: border-box;
  // border: 1px solid var(--black, #282828);

  backdrop-filter: blur(20px);

  border-radius: 10px;
  padding: 50px;
  gap: 1.25rem;
`;

// Style for individual sponsor items
export const SponsorItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  height: 100%;
  width: 100%;
  //   max-width: 100%;
  //   max-height: 100%;
  overflow: hidden;

  // background: blue;

  &:hover {
    transition: all 0.3s ease 0s;
    transform: scale(1.1);
    cursor: pointer;
    /* Add other hover styles as needed */
  }
`;

export const RowStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  //   max-height: 18.125 rem;
  //   min-height: 187.4px;

  //   background: red;
  justify-content: center;
  transition: all 0.3s ease 0s;
  gap: 1rem;
`;

export const DiamondStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 18.125rem;
  width: 100%;
  //   height: 100%;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid var(--black, #282828);
  background: #d9d9d9;
  box-shadow: 0px 4px 0px 0px #282828;
`;

export const PlatinumStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 18.125 rem;
  max-height: 18.125 rem;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid var(--black, #282828);
  background: #d9d9d9;
  box-shadow: 0px 4px 0px 0px #282828;
`;

export const GoldStyle = styled.div`
  display: flex;
  justify-content: center;
  max-width: 33.33333%;
  width: 33.33333%;
  height: 15.875 rem;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid var(--black, #282828);
  background: #d9d9d9;
  box-shadow: 0px 4px 0px 0px #282828;
`;

export const SilverStyle = styled.div`
  display: flex;
  justify-content: center;
  max-width: 25%;
  max-height: 12.625 rem;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid var(--black, #282828);
  background: #d9d9d9;
  box-shadow: 0px 4px 0px 0px #282828;
`;

export const BronzeStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 16.666667%;
  min-height: 18.125 rem;
  box-sizing: border-box;

  border-radius: 5px;
  border: 1px solid var(--black, #282828);
  background: #d9d9d9;
  box-shadow: 0px 4px 0px 0px #282828;
`;

// export const PlatinumStyle = styled.div`
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
