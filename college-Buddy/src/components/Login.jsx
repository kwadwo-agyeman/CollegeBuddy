import React from "react";
import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const ImageBox = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

function Login() {
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [correctLogins, setLogins] = React.useState("");
  React.useEffect(()=>{
    if(correctLogins){
        window.location.href = correctLogins
    }
  },[correctLogins])
  const navToProfile = () => {
    if (username === "CollegeBud23" && password === "2023@college") {
      setLogins("/profile");
    } else {
      console.log("wrong logins");
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Box flex={{ xs: 12, sm: 6 }} sx={{ width: { xs: "80%", sm: "50%" } }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "50", sm: "100" },
              textAlign: { xs: "center", sm: "center", fontWeight: "bold" },
            }}
          >
            LOGIN
          </Typography>

          <TextField
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="outlined-required"
            label="Username"
            placeholder="Username"
            size="small"
            fullWidth
            sx={{ mt: 5 }}
          />
          <br />
          <br />
          <TextField
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            label="Password"
            placeholder="Password"
            size="small"
            fullWidth
            sx={{ mt: 3 }}
          />
          <br />
          <br />
          
            <Link to={correctLogins}>
              <Button
                variant="contained"
                onClick={navToProfile}
                sx={{
                  marginLeft: "34%",
                  backgroundColor: "#5FE88D",
                  "&:hover": { backgroundColor: "green" },
                }}
              >
                Login
              </Button>
            </Link>
          
          <Divider sx={{ mt: 3 }}>
            <Typography>Login With</Typography>
          </Divider>
          <br />
          <Button variant="contained" fullWidth>
            <GoogleIcon />
            <Typography sx={{ ml: 1 }}>Login with Google</Typography>
          </Button>
          <br />
          <br />
          <Button variant="contained" fullWidth>
            <FacebookIcon />
            <Typography sx={{ ml: 1 }}> Login with Facebook</Typography>
          </Button>
        </Box>

        <ImageBox flex={6}>
          <img
            src="https://images.pexels.com/photos/5588210/pexels-photo-5588210.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="login-image"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></img>
        </ImageBox>
      </Stack>
    </Box>
  );
}

export default Login;
