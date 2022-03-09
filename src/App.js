import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Loggin from "./pages/Loggin";
import AddQuestion from "./pages/AddQuestion";
import LeaderBoard from "./pages/LeaderBoard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const activeUser = useSelector((state) => state.activeUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeUser.length == 0) {
      return navigate("/");
    }
  }, []);

  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Loggin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/LeaderBoard" element={<LeaderBoard />} />
        <Route path="/AddQuestion" element={<AddQuestion />} />
      </Routes>
    </div>
  );
};

export default App;
