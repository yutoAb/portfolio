import Reac, { useRef } from "react";
import logo from "./logo.svg";
import { Top } from "./Top/Top";
import { Project } from "./Project/Project";
import { Education } from "./Education/Education";
import { Contact } from "./Contact/Contact";
import { Tabs, Tab, Box, Button } from "@mui/material";

const App = () => {
  const topRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);


  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "200px",
          borderRight: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          sx={{ borderRight: 1, borderColor: "divider", width: "200px" }}
        >
          <Tab label="Top" onClick={() => handleScroll(topRef)} />
          <Tab label="Project" onClick={() => handleScroll(projectRef)} />
          <Tab label="Education" onClick={() => handleScroll(educationRef)} />
          <Tab label="Contact" onClick={() => handleScroll(contactRef)} />
        </Tabs>
      </Box>

      <Box sx={{ marginLeft: "200px", padding: 2, width: "100%" }}>
        <div ref={topRef}>
          <Top />
        </div>
        <div ref={projectRef}>
          <Project />
        </div>
        <div ref={educationRef}>
          <Education />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Button>text</Button>
      </Box>
    </Box>
  );
};

export default App;
