import React from "react";
import ActivitiesPage from './ActivitiesPage'
import Home from "./Home";
import SignUp from "./Signup";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activitiesPage" element={<ActivitiesPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
