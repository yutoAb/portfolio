import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { MediaQueryProvider } from "./components/pages/common/Provider/MediaQueryProvider";
import MainComponent from "./components/pages/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components/pages/NotFound";
import Classification from "./components/pages/pc/Classification/Classification";

/**
 * サーバーサイドのコンテキストパス
 */
export const ENDPOINT_BASE_PATH = ``;
export default function App() {
  return (
    <BrowserRouter basename={`${ENDPOINT_BASE_PATH}`}>
      <HelmetProvider>
        <MediaQueryProvider>
          <Routes>
            <Route path="">
              <Route index element={<MainComponent />} />
              <Route path="classification" element={<Classification />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </MediaQueryProvider>
      </HelmetProvider>
    </BrowserRouter>
  );
}
