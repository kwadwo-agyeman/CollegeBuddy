import React, { useState } from "react";
import CertsNAwards from "./components/CertsNAwards";
import PersonalInfo from "./components/PersonalInfo";
import PersonalInfo2 from "./components/PersonalInfo2";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import profileImg from "../src/assets/profile-img.jpg";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Avatar, Box, Container, IconButton, Tooltip } from "@mui/material";

function Profile() {
  const [fileInput, setFileInput] = useState(null);
const [selectedFile,setSelectedFile]= useState(null)
console.log(selectedFile)
  const handleProfPic = () => {
    if (fileInput) {
      fileInput.click(); 
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = ()=>{
        setSelectedFile(URL.createObjectURL(file))
    }
    reader.readAsDataURL(file)
  };

  return (
    <div>
      <Navbar2 profPic={selectedFile} />
      <div style={{ position: "relative" }}>
        <div>
          <img
            src={profileImg}
            alt="profile-bg pic"
            style={{ width: "100%", height: "15vh" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#FFE381",
            marginTop: "-0.8rem",
            padding: "1rem",
            height: "15vh",
          }}
        >
          <p style={{ marginTop: "2rem" }}></p>
        </div>
        <div style={{ position: "absolute", top: "10vh", left: "5vw" }}>
          <div style={{ position: "relative" }}>
            <Avatar
              alt="Remy Sharp"
              src={selectedFile}
              sx={{
                width: { xs: 120, sm: 120, md: 100 },
                height: { xs: 120, sm: 120, md: 100 },
                border: "0.8rem solid rgb(128,0,128,0.8)",
              }}
            />
            <div style={{ position: "absolute", top: "60%", right: "0%" }}>
              <Tooltip title="Add Profile Pic" onClick={handleProfPic}>
                <IconButton>
                  <AddAPhotoIcon sx={{ fontSize: "25px", color: "white" }} />
                </IconButton>
              </Tooltip>
              {/* Hidden file input */}
              <input
                ref={(input) => setFileInput(input)}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
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
              sm: "1fr 2fr",
              md: "30% 40% 22%",
            },
            gap: "2rem",
          }}
        >
          <div style={{ backgroundColor: "" }}>
            <PersonalInfo2 />
          </div>
          <div style={{ backgroundColor: "" }}>
            <CertsNAwards />
          </div>
          <div style={{ backgroundColor: "" }}>
            <PersonalInfo />
          </div>
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Profile;
