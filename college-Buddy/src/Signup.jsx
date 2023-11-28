import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Box,
  Card,
  TextField,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";

function SignUp() {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    highschool: "",
    address: "",
  });
  console.log(formData)
  console.log(startDate)
const signUpData = (e)=>{
const {name,value} = e.target;
setFormData((prevFormData)=>(
  {...prevFormData, [name]: value}
))
}
  return (
    <Box
      sx={{
        background:
          "linear-gradient(145deg, rgba(0,0,0,0.3), rgb(59, 126, 152,0.7)), url(https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600) center/cover no-repeat",
        height: "130vh",
      }}
    >
      <Navbar />
      <Card
        sx={{
          width: { xs: "90%", sm: "50%" },
          margin: "2rem auto",
          borderLeft: "0.5rem solid plum",
          p: "5rem 2rem",
        }}
      >
        <form>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <FormControl sx={{ width: "48%" }}>
              <TextField
                required
                id="first-name"
                name="firstName"
                value={formData.firstName}
                label="First Name"
                placeholder="College"
                variant="outlined"
                onChange={signUpData}
              />
            </FormControl>
            <FormControl sx={{ width: "48%" }}>
              <TextField
                required
                id="last-name"
                name="lastName"
                value={formData.lastName}
                label="Last Name"
                placeholder="Buddy"
                variant="outlined"
                onChange={signUpData}
              />
            </FormControl>
          </div>

          <FormControl fullWidth sx={{ mt: 3 }}>
            <TextField
              required
              id="email"
              name="email"
              value={formData.email}
              label="Email"
              placeholder="collegebud23@gmail.com"
              variant="outlined"
              onChange={signUpData}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mt: 3 }}>
            <TextField
              required
              id="highschool-name"
              name="highschool"
              value={formData.highschool}
              label="Highschool Name"
              placeholder="Highschool"
              variant="outlined"
              onChange={signUpData}
            />
          </FormControl>

          <FormControl fullWidth sx={{ mt: 3 }}>
            <TextField
              required
              id="physical-address"
              name="address"
              value={formData.address}
              label="Physical Address"
              placeholder="Physical Address"
              variant="outlined"
              onChange={signUpData}
            />
          </FormControl>

          <div
            style={{
              border: "1px solid grey",
              marginTop: "1.5rem",
              padding: "1rem",
              borderRadius: "5px",
            }}
          >
            <InputLabel sx={{ marginBottom: "0.5rem" }}>
              Date of Birth
            </InputLabel>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showYearDropdown
              dateFormat="dd/MM/yyyy"
              className="form-control"
            />
          </div>

          <Box sx={{ mb: -5, mt: 2, display: "grid", placeItems: "center" }}>
            <Button
              sx={{
                backgroundColor: "plum",
                "&:hover": {
                  backgroundColor: "rgb(249, 156, 249)",
                },
              }}
              variant="contained"
            >
              Create Account
            </Button>
          </Box>
        </form>
      </Card>
    </Box>
  );
}

export default SignUp;
