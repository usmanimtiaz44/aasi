import {
  AppBar,
  Avatar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TiGroup } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

const profileDropdownItems = [
  {
    id: 1,
    value: "Account",
    icon: <MdOutlineAccountCircle />,
  },
  {
    id: 2,
    value: "Manage Team",
    icon: <TiGroup />,
  },
  {
    id: 3,
    value: "Settings",
    icon: <CiSettings />,
  },
  {
    id: 4,
    value: "Logout",
    icon: <IoLogOutOutline />,
  },
];

function Navbar({ handleDrawerToggle }) {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(900));

  // State for managing the dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar
        className=""
        position="fixed"
        sx={{ boxShadow: "0", backgroundColor: "#f3f4e6" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Box className=" d-flex  align-items-center justify-content-end  w-100 p-2 rounded-2 nav-style">
            <div className=" d-flex align-items-center">
              <Box
                display="flex"
                alignItems="center"
                className="gap-3"
                sx={{
                  borderRadius: "10px",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                <Box className="d-none d-lg-block">
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: "bold", color: "#333" }}
                  >
                    Joshua Spencer
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
                    Client
                  </Typography>
                </Box>

                <Avatar
                  alt="User Name"
                  src="/navbarProfilePic.svg"
                  sx={{ width: 40, height: 40, marginRight: 1 }}
                  onClick={handleAvatarClick}
                />

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  {profileDropdownItems.map((item, index) => (
                    <MenuItem
                      className="d-flex flex-row gap-3"
                      key={item.id}
                      sx={{ width: "250px" }}
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      {item.icon}
                      <Typography>{item.value}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Hidden mdUp>
                <IconButton onClick={handleDrawerToggle}>
                  <MenuIcon style={{ color: "black" }} />
                </IconButton>
              </Hidden>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
