import { MainContainer } from "./index.styles";

type DemoAppProps = {
  isMobile: boolean | null;
};

const DemoAppComponent = ({ isMobile }: DemoAppProps) => {
  return (
    <MainContainer>
      <h1>{isMobile ? <span>Mobile</span> : <span>Desktop</span>}</h1>
    </MainContainer>
  );
};

export default DemoAppComponent;
