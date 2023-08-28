import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Tree from "./components/Tree/Tree";
import Task from "./components/Task/Task";

import "./App.css";
export default function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/tree" element={<Tree />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Task />} />
        </Routes>
      </Router>


    </div>
  );
}
