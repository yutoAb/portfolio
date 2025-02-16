import React, { useRef, useState, useEffect } from "react";
import { Top } from "./Top/Top";
import { Project } from "./Project/Project";
import { Education } from "./Education/Education";
import { Contact } from "./Contact/Contact";
import { Tabs, Tab, Box, Button, Stack, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const PcContents = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isTabsMinimized, setIsTabsMinimized] = useState(false);
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
    <Stack direction="row">
      {/* 左側のタブ */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: isTabsMinimized ? "10px" : "200px",
          borderRight: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "width 0.3s",
        }}
      >
        <IconButton
          onClick={() => setIsTabsMinimized(!isTabsMinimized)}
          sx={{ position: "absolute", top: 10, right: -25 }}
        >
          {isTabsMinimized ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
        {!isTabsMinimized && (
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={activeTab}
            sx={{
              borderRight: 1,
              borderColor: "divider",
              width: "100%",
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
        )}
      </Box>

      {/* 右側のコンテンツ */}
      <Box
        sx={{
          marginLeft: isTabsMinimized ? "50px" : "200px", // タブの幅分をマージンに設定
          padding: 2,
          width: isTabsMinimized ? "calc(100% - 50px)" : "calc(100% - 200px)", // タブの幅を引いたサイズに調整
          transition: "margin-left 0.3s, width 0.3s",
        }}
      >
        <div ref={topRef} style={{ minHeight: "100vh" }}>
          <Top />
        </div>
        <div ref={projectRef} style={{ minHeight: "100vh" }}>
          <Project />
        </div>
        <div ref={educationRef} style={{ minHeight: "100vh" }}>
          <Education />
        </div>
        <div ref={contactRef} style={{ minHeight: "100vh" }}>
          <Contact />
        </div>
        <Button onClick={() => handleScroll(topRef, 0)}>トップへ</Button>
      </Box>
    </Stack>
  );
};

export default PcContents;
