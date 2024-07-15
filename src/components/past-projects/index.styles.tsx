// components/past-projects/index.styles.tsx
import Image from "next/image";
import styled from "styled-components";
import InterFont from "@/components/inter";
import InterSemiBoldFont from "@/components/inter-semi-bold";


type ProjectsGridProps = {
  mobile?: boolean | null;
};

type ImageProps = {
  mobile?: boolean | null;
};

type ColumnProps = {
  thirdRow?: boolean;
};

// Style for the sponsors container
const Wrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1240px;
  justify-content: center;
  align-items: center;
  align-self: center;
  overflow: hidden;
  padding-bottom: 10px;
`;

// Style for the sponsors grid
const ProjectsGrid = styled.div<ProjectsGridProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${(props) => (props.mobile ? "0" : "50px")};
  gap: 1.25rem;
`;

// Style for rows
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Style for columns
const Column = styled.div<ColumnProps>`
  position: relative;
  object-fit: cover;

  box-sizing: border-box;

  &:not(:last-child) {
    margin-right: 1.5%;
  }
`;

// Style for individual project item links
const ProjectItem = styled.a`
  display: flex;

  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;

  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid var(--black, #282828);
  box-shadow: 0px 4px 0px 0px #282828;

  object-fit: cover;
`;

// Style for image
const StyledImage = styled(Image)<
  ImageProps & { isSpecial?: boolean; className?: string }
>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;

  &.special-logo {
    transform: ${(props) =>
      props.isSpecial && (props.mobile ? "scale(0.6)" : "scale(1)")};
  }

  &:hover {
    transition: all 0.3s ease 0s;
    transform: scale(1.01);
    cursor: pointer;
  }
`;

// Style for subtitle
const SubtitleBox = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  margin: 20px 20px 20px 20px;
  width: calc(100% - 40px);
  background-color: white;

  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid var(--black, #282828);
  box-shadow: 0px 4px 0px 0px #282828;

  color: #000;
  font-size: 1rem;

  padding: 20px 15px 20px 15px;
  z-index: 1;
`;

const Tier1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
`;

const Tier2 = styled.div`
  display: block;
`;

const StyledInter = styled(InterFont)`
  color: #000;
  font-size: 0.75rem;
  letter-spacing: 0.72px;
`;

const StyledInterSemiBold = styled(InterSemiBoldFont)`
  text-align: left;
  color: #000;
  font-size: 1.35rem;
  letter-spacing: 0.72px;
`;

// Styled component for star decals
const StyledDecalImage = styled(Image)`
  position: absolute;
  top: -40px;
  left: -40px;
  width: 90px;
  height: auto;
  z-index: 1;
`;


export {
  Wrapper,
  ProjectsGrid,
  ProjectItem,
  Row,
  Column,
  StyledImage,
  SubtitleBox,
  Tier1,
  Tier2,
  StyledInter,
  StyledInterSemiBold,
  StyledDecalImage,
};
