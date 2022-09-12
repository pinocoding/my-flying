import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
