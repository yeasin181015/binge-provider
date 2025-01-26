// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Trending from "./components/Trending";

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <p>Hello</p>
          </div>
        }
      />
      <Route path="/trending" element={<Trending />} />
    </Routes>
  </Router>
);

export default App;
