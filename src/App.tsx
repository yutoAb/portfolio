import React from 'react';
import { MediaQueryProvider } from './Provider/MediaQueryProvider';
import MainComponent from './components/pages/MainComponent';

export default function App() {
  return (
    <MediaQueryProvider>
      <MainComponent />
    </MediaQueryProvider>
  );
}
