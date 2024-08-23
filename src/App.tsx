import { useState } from "react";
import Header from "./components/Header";
import HomePage from "./containers/Homepage";
import AboutMe from "./containers/Aboutme";
import Education from "./containers/Education";
import Skill from "./containers/Skills";
import WorkHistory from "./containers/WorkHistory";
import ToTopButton from "./components/element/ToTop";

function App() {

  const [isLightMode, setIsLightMode] = useState<boolean>(true);

  return (
    <div className="relative">
      <Header setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <HomePage setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      <AboutMe isLightMode={isLightMode} />
      <Education isLightMode={isLightMode} />
      <Skill isLightMode={isLightMode} />
      <WorkHistory isLightMode={isLightMode} />
      <ToTopButton isLightMode={isLightMode} />
    </div>
  )
}

export default App;
