import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import List from "./components/List/List";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="">
        <Routes>
          <Route path="/my-flying" element={<Home />}>
            
            
            
          </Route>
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
