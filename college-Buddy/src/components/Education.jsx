import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

function Education() {
  const [edit, setEdit] = useState(true);
  const [edu, setEdu] = useState({ highschool: "", address: "", year: "" });
  const handleEdu = (e) => {
    const { name, value } = e.target;
    setEdu((prevEdu) => ({ ...prevEdu, [name]: value }));
  };
  const toggleEdit = () => {
    setEdit((prev) => !prev);
  };

  return (
    <div>
      <Card
        sx={{
          backgroundColor: "rgb(162, 143, 227,0.8)",
          backdropFilter: "blur(8px)",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: "white",
              backgroundColor: "purple",
              p: "3px 10px",
              width: "fit-content",
              borderRadius: "5px",
              fontWeight: 500,
            }}
          >
            Education
          </Typography>
          <Box sx={{ mt: 1,mb:3 }}>
            <Box>
              <TextField
                fullWidth
                id="highschool"
                name="highschool"
                label="Highschool Name"
                value={edu.highschool}
                onChange={handleEdu}
                sx={{
                  display: edit ? "block" : "none",
                  mt: 2,
                  bgcolor: "white",
                  borderRadius: 1,
                }}
                placeholder="Highschool"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="address"
                name="address"
                label="Highschool location"
                value={edu.address}
                onChange={handleEdu}
                sx={{
                  display: edit ? "block" : "none",
                  mt: 2,
                  bgcolor: "white",
                  borderRadius: 1,
                }}
                placeholder="Highschool Address"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="yaer"
                name="year"
                label="Date of Completion/Expected Date of Completion"
                value={edu.year}
                onChange={handleEdu}
                sx={{
                  display: edit ? "block" : "none",
                  mt: 2,
                  bgcolor: "white",
                  borderRadius: 1,
                }}
                placeholder="mm/dd/yyyy"
                variant="outlined"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "white",
                  display: edit ? "none" : "block",
                  mt: 2,
                }}
              >
                <span style={{ fontWeight: 600, display: "block", fontSize:"20px" }}>
                  HighSchool Name:{" "}
                </span>
                {edu.highschool}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  display: edit ? "none" : "block",
                  mt: 2,
                }}
              >
                <span style={{ fontWeight: 600, display: "block",fontSize:"20px"  }}>
                  Address:{" "}
                </span>
                {edu.address}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  display: edit ? "none" : "block",
                  mt: 2,
                }}
              >
                <span style={{ fontWeight: 600, dispaly: "block",fontSize:"20px"  }}>
                  Date of completion:{" "}
                </span>
                {edu.year}
              </Typography>
            </Box>
          </Box>
          <EditIcon
            onClick={toggleEdit}
            sx={{
              color: "purple",
              position:"absolute",
              right:"5%",
              bottom:"5%"
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default Education;
