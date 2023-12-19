import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import certHeaderImg from "../assets/cert-header.jpg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {xs:"95%",sm:"80%"},
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CertsNAwards() {
  const [selectedImage, setSelectedImage] = useState([]);
  const [zoomCert, setZoomCert] = useState("");
  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).map((file) => ({
      fileName: URL.createObjectURL(file),
    }));
    setSelectedImage(newImages);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const viewCert = (image, index) => {
    setOpen(true);
    setZoomCert(image);
  };
  return (
    <div>
      <Card
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgb(125, 125, 255,0.3)",
          height: { xs: "fit-content", sm: "25rem" },
          overflow: "auto",
          "&:hover": { boxShadow: "5px 5px 1rem rgb(0,0,0,0.3)" },
        }}
      >
        <Box>
          <CardMedia sx={{ height: "4rem" }} image={certHeaderImg} />
        </Box>
        <CardContent>
          <Typography sx={{ fontWeight: 500, color: "white" }}>
            Certificates and Awards
          </Typography>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
          <Grid container spacing={2} sx={{ mt: 3 }}>
            {selectedImage &&
              selectedImage.map((Img, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <img
                    key={i}
                    src={Img.fileName}
                    alt=""
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      border: "0.5rem solid white",
                      boxShadow: "3px 3px 15px rgb(0,0,0,0.3)",
                      cursor: "pointer",
                    }}
                    onClick={() => viewCert(Img.fileName, i)}
                  />
                </Grid>
              ))}
          </Grid>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="zoom--cert"
        aria-describedby="zoom--cert"
      >
        <Box sx={style}>
          <Box sx={{display:"grid",placeItems:"center"}}>
          <img src={zoomCert} alt="" style={{width:"50vw",boxShadow:"5px 3px 10px rgb(0,0,0,0.3) "}}/>


          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default CertsNAwards;
