import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import List from "./components/List/List";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes basename="/my-flying">
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
