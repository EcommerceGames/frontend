import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LogoHeader from "../../assets/images/logo.png";
import { enumMenu } from "../../utils/contants";
import ButtonMain from "../button/buttonMain";
import { Link, useNavigate } from "react-router-dom";
// import DarkLight from "../darkLight";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/slide/apiRequest";
import CartIcon from "../CartIcon";

export default function Header() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //logout
  const handleLogout = () => {
    logOut(dispatch, navigate);
  };
  const user = useSelector((state) => state.user.user.currentUser);
  // console.log("user", user);

  const items = useSelector((state) => state.cart.shopCart.items.items);
  // console.log("tong tien", items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: (theme) => theme.GameZone.heightHeader,
        padding: (theme) => theme.GameZone.paddingHeader,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src={LogoHeader}
          sx={{
            height: "72px",
          }}
        />
        <Box sx={{ display: "flex" }}>
          {enumMenu.map((item, index) => (
            <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  padding: "16px 16px 18px 15px",
                }}
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    color: (theme) => theme.palette.text.primary,
                    fontSize: (theme) => theme.GameZone.fontsizeTextHeader,
                    "&:hover": {
                      color: (theme) => theme.palette.text.secondary,
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {user ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box>
                <IconButton
                  onClick={handleClick}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Avatar src={user.image || "/default-avatar.png"} />
                  <Typography sx={{ color: "#FFFFFF" }}>
                    {user.username}
                  </Typography>
                </IconButton>
                <Menu
                  sx={{
                    "& .MuiPaper-root": {
                      backgroundColor: "rgba(129, 122, 122, 0)",
                      backdropFilter: "blur(10px)",
                      color: "#fff",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                      borderRadius: "8px",
                    },
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                >
                  <MenuItem
                    sx={{
                      color: "#fff",
                      transition: "background 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                    onClick={() => {
                      navigate("/infoAccount");
                      handleClose();
                    }}
                  >
                    Account information
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#fff",
                      transition: "background 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                    onClick={() => {
                      navigate("/wishlist");
                      handleClose();
                    }}
                  >
                    Wishlist
                  </MenuItem>
                  <MenuItem
                    sx={{
                      color: "#fff",
                      transition: "background 0.3s ease-in-out",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                      },
                    }}
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
              <CartIcon cartCount={totalQuantity} />
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <ButtonMain
                text={"sign in"}
                onClick={() => navigate("/signin")}
              />
              <ButtonMain
                text={"sign up"}
                onClick={() => navigate("/signup")}
              />
            </Box>
          )}

          {/* <DarkLight /> */}
        </Box>
      </Box>
    </Box>
  );
}
