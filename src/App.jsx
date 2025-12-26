import gsap from "gsap";
import { ScrollTrigger, SplitText, PixiPlugin } from "gsap/all";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText, PixiPlugin);

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
    </div>
  );
};

export default App;
