import React from "react";
import { MediaQueryProvider } from "./components/pages/common/Provider/MediaQueryProvider";
import MainComponent from "./components/pages/MainComponent";
import { BrowserRouter } from "react-router-dom";

/**
 * サーバーサイドのコンテキストパス
 */
export const ENDPOINT_BASE_PATH = `/portfolio`;

export default function App() {
  return (
    <BrowserRouter basename={`${ENDPOINT_BASE_PATH}/app`}>
      <MediaQueryProvider>
        <MainComponent />
      </MediaQueryProvider>
    </BrowserRouter>
  );
}
