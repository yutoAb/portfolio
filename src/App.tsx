import React from 'react';
import logo from './logo.svg';
import { Top } from './Top/Top';
import { Button } from "@mui/material";

const App = () => {
  return (
    <div className="App">
      <Top />
      <Button>text</Button>
    </div>
  );
}

export default App;
