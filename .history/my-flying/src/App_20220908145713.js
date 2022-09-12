import React from "react";
import Home from "./components/Home/Home"
import "./App.css";
function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
