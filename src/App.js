import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogginPage from "./pages/LogginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogginPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
