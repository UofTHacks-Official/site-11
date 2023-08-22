import DemoAppComponent from "@/components/demo-app-component";

type DemoAppProps = {
  isMobile: boolean | null;
};

const DemoApp = ({ isMobile }: DemoAppProps) => {
  return <DemoAppComponent isMobile={isMobile} />;
};

export default DemoApp;
