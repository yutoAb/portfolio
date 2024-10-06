import Reac, { useRef } from "react";
import logo from "./logo.svg";
import { Top } from "./Top/Top";
import { Project } from "./Project/Project";
import { Tabs, Tab, Box, Button } from "@mui/material";

const App = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="App">
      <Tabs>
        <Tab label="Top" onClick={() => handleScroll(topRef)} />
        <Tab label="Project" onClick={() => handleScroll(projectRef)} />
      </Tabs>
      <div ref={topRef}>
        <Top />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <Button>text</Button>
    </div>
  );
};

export default App;
