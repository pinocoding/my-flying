import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
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
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
