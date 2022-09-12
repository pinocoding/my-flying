import React from "react";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
