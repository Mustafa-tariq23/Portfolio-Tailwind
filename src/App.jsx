// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import About from "./Components/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
