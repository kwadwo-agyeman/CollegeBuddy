import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import liveBg from '../assets/livebg.jpg'

function LiveLetter() {
  const [letters, setLetters] = useState("");
  const homepageLetters =
    "🚀 Exciting Adventures Await! 🎓 Join our diverse community of thinkers, dreamers, and doers! Unleash your potential, forge lasting friendships, and embark on a journey of growth and discovery. 🌟 #FutureLeaders #CollegeBuddy";
  useEffect(() => {
    let index = 0;
    const writeLettersInterval = setInterval(() => {
      setLetters((prevLetters) => {
        if (index < homepageLetters.length) {
          return prevLetters + homepageLetters[index++];
        } else {
          index = 0;
          return "";
        }
      });
    }, 100);
    return () => clearInterval(writeLettersInterval);
  }, []);
  const styles = {
    //background: `linear-gradient(345deg,rgba(0,0,0,0.2),rgb(0,0,0,0.2)), url(${liveBg}) no-repeat`,
    background:"white",
    backgroundSize:"cover",
    backgroundFilter:"8px",
    height: "30vh",
    width:{xs:"85vw",sm:"40vw"},
    borderRadius: "10px",
    padding: "20px",
    color:"black",
    fontWeight:500,
    border: "2px solid rgb(0,0,0,0.6)",
    boxShadow: "15px 16px 2rem rgb(0,0,0)",
  };
  return <Box sx={styles}>{letters}</Box>;
}

export default LiveLetter;
