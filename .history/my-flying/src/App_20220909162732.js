import React from "react";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import List from "./components/List/List";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
