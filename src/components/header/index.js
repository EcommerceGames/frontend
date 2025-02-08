import { Box, Typography } from "@mui/material";
import React from "react";
import LogoHeader from "../../assets/images/logo.png";
import { enumMenu } from "../../utils/contants";
import ButtonMain from "../button/buttonMain";
import { Link } from "react-router-dom";
import DarkLight from "../darkLight";
import Border from "../../assets/images/banner/border.png";

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
      <Box
        sx={{
          width: "100%",
          maxWidth: "540px",
          margin: "185px auto 0",
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            letterSpacing: "2px",
            color: (theme) => theme.palette.text.primary,
          }}
        >
          ARE YOU READY FOR NEW CHALLENGE?
        </Typography>
        <Box
          component="img"
          src={Border}
          sx={{
            maxWidth: "100%",
            height: "auto",
            width: "100%",
          }}
        />
        <Typography
          sx={{
            fontSize: "40px",
            paddingTop: "12px",
            lineHeight: "1.3",
            color: (theme) => theme.palette.text.primary,
            fontWeight: "800",
          }}
        >
          EXPERIENCE A{" "}
          <Typography
            component="span"
            sx={{
              backgroundColor: (theme) => theme.palette.ButtonColor.main,
              maxWidth: "250px",
              padding: "10px 5px",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: "800",
            }}
          >
            FRESH TAKE
          </Typography>
          <br />
          ON THE SURVIVAL
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: (theme) => theme.palette.text.hint }}
        >
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </Typography>
      </Box>
    </Box>
  );
}
