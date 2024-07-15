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
  max-width: 1200px;
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

// Style for individual project items
const ProjectItem = styled.a`
  display: flex;
  position: relative;

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

  &:hover {
    transition: all 0.3s ease 0s;
    transform: scale(1.01);
    cursor: pointer;
  }
`;

// Style for rows
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// Style for columns
const Column = styled.div<ColumnProps>`
  flex: ${(props) => (props.thirdRow ? "1 1 32%" : "1 1 48%")};
  max-width: ${(props) => (props.thirdRow ? "32%" : "48%")};
  box-sizing: border-box;

  &:not(:last-child) {
    margin-right: ${(props) => (props.thirdRow ? "1.5%" : "4%")};
  }
`;

// Style for image
const StyledImage = styled(Image)<
  ImageProps & { isSpecial?: boolean; className?: string }
>`
  padding: ${(props) => (props.mobile ? "0.5rem;" : "3vw")};
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (props.isSpecial ? "5%;" : "0%")};
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  overflow: hidden;
  object-fit: fill;

  &.special-logo {
    transform: ${(props) =>
      props.isSpecial && (props.mobile ? "scale(0.6)" : "scale(1)")};
  }
`;

// Style for subtitle
const SubtitleBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
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

const StyledInter = styled(InterFont)`
  color: #000;
  font-size: 1rem;
  letter-spacing: 0.72px;
`;

const StyledInterSemiBold = styled(InterSemiBoldFont)`
  color: #000;
  font-size: 1rem;
  letter-spacing: 0.72px;
`;

export { Wrapper, ProjectsGrid, ProjectItem, Row, Column, StyledImage, SubtitleBox, StyledInter, StyledInterSemiBold };
