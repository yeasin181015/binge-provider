// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";
import Content from "./components/Content";

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/trending"
        element={
          <div>
            <h1>Trending Content</h1>
            <ul>
              <li>Movie 1: Description 1</li>
              <li>Movie 2: Description 2</li>
            </ul>
          </div>
        }
      />
      <Route path="/content/:id" element={<Content />} />
    </Routes>
  </Router>
);

export default App;
