import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataTree from "./components/DataTree/DataTree";
import Tree from "./components/Tree/Tree";
import Task from "./components/Task/Task";

import data from "./data.json";

import "./App.css";
export default function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href={'/'}>Task</a> </li>
            <li><a href={'/tree'}>Tree</a> </li>
            <li><a href={'/data_tree'}>Data Tree</a> </li>
          </ul>
        </nav>
      </header>
      <Router>
        <Routes>
            <Route path="/data_tree" element={<DataTree data={data[0]} />} />
          <Route path="/tree" element={<Tree />} />
          <Route path="/" element={<Task />} />
        </Routes>
      </Router>


    </div>
  );
}
