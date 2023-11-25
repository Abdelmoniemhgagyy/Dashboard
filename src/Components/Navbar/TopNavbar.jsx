import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";
import { Stack } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Box from "@mui/material/Box";


function TopNavbar({ open, setOpen, setMode }) {

  
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // eslint-disable-next-line no-undef
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      // eslint-disable-next-line no-undef
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  // eslint-disable-next-line no-undef
  const StyledInputBase = styled(InputBase)(({ theme }) => {
    return {
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "20ch",
        },
      },
    };
  });

  const drawerWidth = 240;
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const theme = useTheme();
  return (
    <div>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box flexGrow={1}></Box>
          <Stack direction={"row"}>
            {theme.palette.mode ==="dark" ?(
              <IconButton color="inherit">
                <WbSunnyOutlinedIcon
                   onClick={() =>{
                    localStorage.setItem("currentMode",theme.palette.mood==="light" ? "dark" : "light")
                    setMode(localStorage.getItem("currentMode")) 
                  }
                  }
                />
              </IconButton>
            ):
            (
              <IconButton color="inherit">
                <DarkModeOutlinedIcon
                  onClick={() =>{
                    localStorage.setItem("currentMode",theme.palette.mode === "light" ? "dark" : "light")
                    setMode(localStorage.getItem("currentMode"))
                    

                  
                  }
                   
                  }
                />
              </IconButton>
            ) }

            <IconButton color="inherit">
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <SettingsOutlinedIcon />
            </IconButton>
            <IconButton color="inherit">
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopNavbar;
