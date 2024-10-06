import React, { useRef, useState, useEffect } from "react";
import logo from "./logo.svg";
import { Top } from "./Top/Top";
import { Project } from "./Project/Project";
import { Education } from "./Education/Education";
import { Contact } from "./Contact/Contact";
import { Tabs, Tab, Box, Button } from "@mui/material";

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const topRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (
    ref: React.RefObject<HTMLDivElement>,
    index: number
  ) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setActiveTab(index);
    }
  };

  const handleScrollEvent = () => {
    const topPosition = topRef.current?.offsetTop || 0;
    const projectPosition = projectRef.current?.offsetTop || 0;
    const educationPosition = educationRef.current?.offsetTop || 0;
    const contactPosition = contactRef.current?.offsetTop || 0;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= contactPosition - 100) {
      setActiveTab(3);
    } else if (scrollPosition >= educationPosition - 100) {
      setActiveTab(2);
    } else if (scrollPosition >= projectPosition - 100) {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTab}
          sx={{
            borderRight: 1,
            borderColor: "divider",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tab label="Top" onClick={() => handleScroll(topRef, 0)} />
          <Tab label="Project" onClick={() => handleScroll(projectRef, 1)} />
          <Tab
            label="Education"
            onClick={() => handleScroll(educationRef, 2)}
          />
          <Tab label="Contact" onClick={() => handleScroll(contactRef, 3)} />
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
        <Button onClick={() => handleScroll(topRef, 0)}>トップへ</Button>
      </Box>
    </Box>
  );
};

export default App;
