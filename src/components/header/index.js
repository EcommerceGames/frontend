import { Box, Typography } from "@mui/material";
import React from "react";
import LogoHeader from "../../assets/images/logo.png";
import { enumMenu } from "../../utils/contants";
import ButtonMain from "../button/buttonMain";
import { Link } from "react-router-dom";
import DarkLight from "../darkLight";


export default function Header() {
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
          <ButtonMain text={"sign in"} />
          <ButtonMain text={"sign up"} />
          <DarkLight />
        </Box>
      </Box>
      
    </Box>
  );
}
