import React from "react";
import Login from "./Login";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Stack,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  CssBaseline,
  Modal,
  Button,
  //TextField,
  //Autocomplete,
  //Link
} from "@mui/material";
import Link from "@mui/material/Link";
import {styled} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import DarkModeIcon from "@mui/icons-material/DarkMode"; //styled components
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

const LoginBox = styled(Box)(({theme})=>({
  width: "90%",
  [theme.breakpoints.up("sm")]: {
    width: "50%"
  }
}))
function Navbar() {
  const [rightmenu, setRightmenu] = React.useState(false);
  ///handle closing of rightmenu
  const handleClose = () => {
    setRightmenu((prevMenu) => !prevMenu);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const modalHandleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "",
    boxShadow: 24,
    p: 4,
  };



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

          <StyledStack direction="row" spacing={2} >
            <Tooltip title="Change Theme">
              <IconButton
                sx={{ color: "plum", bgcolor: "rgb(225,225,225,0.6)" }}
              >
                <CircleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Night/Day">
              <IconButton sx={{ bgcolor: "rgb(225,225,225,0.6)" }}>
                <DarkModeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="profile/login">
              <IconButton
                onClick={handleClose}
                sx={{ bgcolor: "rgb(225,225,225,0.6)", color: "palevioletred" }}
              >
                <PersonIcon />
              </IconButton>
            </Tooltip>
          </StyledStack>
          <StyledTooltip title="profile/login">
            <IconButton
              onClick={handleClose}
              sx={{ bgcolor: "rgb(225,225,225,0.6)", color: "palevioletred" }}
            >
              <PersonIcon />
            </IconButton>
          </StyledTooltip>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={rightmenu}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleOpen} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LoginIcon />

              <Button >Login</Button>
            </MenuItem>
          </Menu>

          <div>
            <Modal
              open={open}
              onClose={modalHandleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <LoginBox sx={style}>
                <Login/>
              </LoginBox>
            </Modal>
          </div>
        </StyledToolbar>
      </AppBar>
  );
}

export default Navbar;
