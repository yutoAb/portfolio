import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MediaQueryProvider } from "./components/pages/common/Provider/MediaQueryProvider";
import MainComponent from "./components/pages/MainComponent";

export default function App() {
  return (
    <HelmetProvider>
      <MediaQueryProvider>
        <MainComponent />
      </MediaQueryProvider>
    </HelmetProvider>
  );
}
