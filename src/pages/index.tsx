import Site11 from "./main-site";
import { useMobileDetect } from "@/hooks/useMobileDetect";

const App = () => {
  if (useMobileDetect() != null) return <Site11 />;
};

export default App;
