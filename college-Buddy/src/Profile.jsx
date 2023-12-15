import React, { useState } from "react";
import CertsNAwards from "./components/CertsNAwards";
import PersonalInfo from "./components/PersonalInfo";
import PersonalInfo2 from "./components/PersonalInfo2";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import profileHead from "./assets/profileHead.jpg";
import profileImg from "./assets/profileImg.jpg"
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function Profile(props) {
  
  return (
    <div style={{ backgroundImage: `url(${profileImg})` }}>
      <Navbar2 profPic={props.selectedFile} />
      <div style={{ }}>
        <div
          style={{
            background: `url(${profileHead}) center/cover no-repeat`,
            marginTop: "0rem",
            padding: "1rem",
            height: "18vh",
            boxShadow: "5px 5px 8px rgb(0,0,0,0.3)",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
          }}
        >
          <div style={{position: "relative",  }}>
            <Avatar
              alt="Remy Sharp"
              src={props.selectedFile}
              sx={{
                width: { xs: 120, sm: 120, md: 80 },
                height: { xs: 120, sm: 120, md: 80 },
                border: "0.8rem solid rgb(128,0,128,0.8)",
                
              }}
            />
            <Tooltip
              sx={{ position: "absolute",bottom:-2,right:-1 }}
              title="Add Profile Pic"
              onClick={props.handleProfPic}
            >
              <IconButton>
                <AddAPhotoIcon sx={{ fontSize: "25px", color: "white" }} />
              </IconButton>
            </Tooltip>
          </div>
          <Link to="/activitiesPage" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                mt: 2.5,
                color: "white",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Typography variant="h6">Activities</Typography>
              <KeyboardArrowRightIcon />
            </Box>
          </Link>
        </div>
        <div
          style={
            {
              /*position: "absolute", top: "10vh", left: "5vw" */
            }
          }
        >
          <div style={{ position: "relative" }}>
            {/**            <Avatar
              alt="Remy Sharp"
              src={selectedFile}
              sx={{
                width: { xs: 120, sm: 120, md: 100 },
                height: { xs: 120, sm: 120, md: 100 },
                border: "0.8rem solid rgb(128,0,128,0.8)",
              }}
            />
 */}
            <div style={{ position: "absolute", top: "60%", right: "0%" }}>
              {/******              <Tooltip title="Add Profile Pic" onClick={handleProfPic}>
                <IconButton>
                  <AddAPhotoIcon sx={{ fontSize: "25px", color: "white" }} />
                </IconButton>
              </Tooltip>
 */}
              {/* Hidden file input */}
              <input
                ref={(input) => props.setFileInput(input)}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={props.handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Container sx={{ m: "3rem auto 6rem" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "30% 40% 22%",
            },
            gap: "2rem",
          }}
        >
          <Box style={{}}>
            <PersonalInfo2 />
          </Box>
          <Box sx={{ backgroundColor: "" }}>
            <CertsNAwards />
          </Box>
          <Box style={{ backgroundColor: "" }}>
            <PersonalInfo />
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
