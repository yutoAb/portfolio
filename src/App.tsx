import React from "react";
import { MediaQueryProvider } from "./components/pages/common/Provider/MediaQueryProvider";
import MainComponent from "./components/pages/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components/pages/NotFound";
import Movie from "./components/pages/pc/Movie/Movie";

/**
 * サーバーサイドのコンテキストパス
 */
export const ENDPOINT_BASE_PATH = `/portfolio`;

export default function App() {
  return (
    <BrowserRouter basename={`${ENDPOINT_BASE_PATH}`}>
      <MediaQueryProvider>
        <Routes>
          <Route path="app">
            <Route index element={<MainComponent />} />
            <Route path="movie" element={<Movie />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </MediaQueryProvider>
    </BrowserRouter>
  );
}
