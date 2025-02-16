import React from "react";
import { MediaQueryProvider } from "./components/pages/common/Provider/MediaQueryProvider";
import MainComponent from "./components/pages/MainComponent";

export default function App() {
  return (
    <MediaQueryProvider>
      <MainComponent />
    </MediaQueryProvider>
  );
}
