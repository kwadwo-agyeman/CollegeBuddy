import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import certHeaderImg from '../assets/cert-header.jpg'
function CertsNAwards() {
  const [selectedImage, setSelectedImage] = useState([]);
  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).map((file) => ({
      fileName: URL.createObjectURL(file),
    }));
    setSelectedImage(newImages);
  };
  return (
    <div>
      <Card
        sx={{
          backdropFilter: "blur(8px)",
          backgroundColor: "rgb(125, 125, 255,0.3)",
          height:{xs: "fit-content", sm:"23rem"},
          overflow: "auto",
        }}
      >
        <Box>
        <CardMedia
          sx={{ height: "4rem", }}
          image={certHeaderImg}
        />
        </Box>
        <CardContent>
          <Typography sx={{ fontWeight: 500 }}>
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
                    }}
                  />
                </Grid>
              ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default CertsNAwards;
