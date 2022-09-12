import React from "react";

import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
