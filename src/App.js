import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogginPage from "./pages/LogginPage";
import AddQuestion from "./pages/AddQuestion";
import LeaderBoard from "./pages/LeaderBoard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LogginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LeaderBoard" element={<LeaderBoard />} />
        <Route path="/AddQuestion" element={<AddQuestion />} />
      </Routes>
    </div>
  );
};

export default App;
