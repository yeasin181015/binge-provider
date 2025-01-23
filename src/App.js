// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Content from "./components/Content";

const App = () => (
  <Router>
    <Routes>
      <Route path="/trending" element={<Trending />} />
      <Route path="/content/:id" element={<Content />} />
    </Routes>
  </Router>
);

export default App;
