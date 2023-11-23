import React from "react";
import Profile from "./Profile";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
