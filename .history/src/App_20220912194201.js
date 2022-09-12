import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import List from "./components/List/List";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/my-flying" element={<Home />} />
        <Route path="/my-flying/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
