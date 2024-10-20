import { useState } from "react";
import HeroPage from "./components/HeroPage";
import Intro from "./components/Intro";
import Unleash from "./components/Unleash";
import Discover from "./components/Discover";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Feed from "./components/Feed";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeroPage />
      <Intro />
      <Unleash />
      <Discover />
      <Connect />
      <Feed />
      <Footer />
    </>
  );
}

export default App;
