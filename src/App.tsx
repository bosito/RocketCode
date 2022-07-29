import React from 'react';
import Navigation from './navigation/Navigation';
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};
