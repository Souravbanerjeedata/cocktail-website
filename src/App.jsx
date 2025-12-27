import gsap from "gsap";
import { ScrollTrigger, SplitText, PixiPlugin } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText, PixiPlugin);

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
