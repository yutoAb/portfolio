import React from "react";
import logo from "./logo.svg";
import { Top } from "./Top/Top";
import { Project } from "./Project/Project";
import { Button } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <Top />
      <Project />
      <Button>text</Button>
    </div>
  );
};

export default App;
