import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aims from "./components/Aims";
import Faq from "./components/Testimonials";
import { Box } from "@mui/material";

function Home() {
  return (
    <Box>
      <Navbar />
      <Header />
      <br />
      <br />
      <Aims />
      <br />
      <br />
      <Faq />
      <br />
      <br />
      <Footer />
    </Box>
  );
}

export default Home;
