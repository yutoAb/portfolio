import React, { useRef } from "react";
import { Top } from "./Top/Top";
import { Project } from "./Project/Project";
import { Education } from "./Education/Education";
import { Contact } from "../pc/Contact/Contact";
import { Box, Button } from "@mui/material";
import Footer from "../common/Footer";

const MobileContents = () => {
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
    }
  };

  return (
    <Box sx={{ width: "100%", margin: 0, padding: 0, overflowX: "hidden" }}>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            width: "80%",
            marginY: "10px",
          }}
        >
          <Button variant="contained" onClick={() => handleScroll(topRef, 0)}>
            トップへ
          </Button>

          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default MobileContents;
