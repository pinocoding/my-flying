import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import List from "./components/List/List";
import "./App.css";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route base="/" element={<Home />} />
          <Route base="/" element={<List />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
