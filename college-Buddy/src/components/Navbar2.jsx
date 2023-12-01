import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Stack,
  Tooltip,
  IconButton,
  CssBaseline,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode"; //styled components
import { Link } from "react-router-dom";
const StyledToolbar = styled(Toolbar)({
  background: "#5FE88D",
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 8px",
});

const LogoTypography = styled(Typography)({
  fontFamily: "cursive",
  fontWeight: 600,
});

const Search = styled(Box)({
  background: "white",
  width: "45%",
  display: "flex",
  gap: 3,
  borderRadius: 8,
  padding: 7,
});

const StyledStack = styled(Stack)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const StyledTooltip = styled(Tooltip)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar2(props) {
  return (
    <AppBar sx={{ position: "sticky", width: "100%" }}>
      <CssBaseline />
      <StyledToolbar>
        <LogoTypography
          variant="h5"
          component="a"
          sx={{ fontSize: { xs: 20 } }}
        >
          College Buddy
        </LogoTypography>

        <Search>
          <SearchIcon sx={{ color: "skyblue", fontSize: 30 }} />
          <InputBase
            size="small"
            placeholder="navigate various part of page"
            fullWidth
          />
        </Search>

        <StyledStack direction="row" spacing={2}>
          <Tooltip title="Change Theme">
            <IconButton sx={{ color: "plum", bgcolor: "rgb(225,225,225,0.6)" }}>
              <CircleIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Night/Day">
            <IconButton sx={{ bgcolor: "rgb(225,225,225,0.6)" }}>
              <DarkModeIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="profile/login">
            <Link to="/profile">
              <IconButton
                sx={{ bgcolor: "rgb(225,225,225,0.6)", color: "palevioletred" }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={props.profPic}
                  sx={{ width: 25, height: 25 }}
                />
              </IconButton>
            </Link>
          </Tooltip>
        </StyledStack>
        <StyledTooltip title="profile/login">
          <Link to="/profile">
            <IconButton
              sx={{ bgcolor: "rgb(225,225,225,0.6)", color: "palevioletred" }}
            >
              <Avatar
                alt="Remy Sharp"
                src={props.profPic}
                sx={{ width: 25, height: 25 }}
              />
            </IconButton>
          </Link>
        </StyledTooltip>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar2;