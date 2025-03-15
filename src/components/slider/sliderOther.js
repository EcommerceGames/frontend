import React from "react";
import { Box, Typography } from "@mui/material";
import BgOther from "../../assets/images/banner/bannerOther.png";
import { Link, useLocation, useParams } from "react-router-dom";

export default function SliderOther() {
  const { id } = useParams();
  const location = useLocation();
  const pathname = location.pathname.replace("/", "");

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BgOther})`,
          backgroundRepeat: "no-repeat",
          padding: "120px 0",
          marginTop: (theme) => theme.GameZone.heightHeader,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            backgroundColor: "#000000cc",
          }}
        />
        <Box
          sx={{
            width: "1170px",
            zIndex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "32px",
              color: "#FFFFFF",
            }}
          >
            GameZone
          </Typography>

          {pathname === `games/${id}` ? (
            <Typography
              sx={{
                cursor: "pointer",
              }}
            >
              <Box
                component={Link}
                to="/"
                sx={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  "&:hover": {
                    color: (theme) => theme.palette.text.secondary,
                  },
                }}
              >
                Home
              </Box>
              /GameDetail
            </Typography>
          ) : (
            <Typography
              sx={{
                cursor: "pointer",
              }}
            >
              <Box
                component={Link}
                to="/"
                sx={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  "&:hover": {
                    color: (theme) => theme.palette.text.secondary,
                  },
                }}
              >
                Home
              </Box>
              /{pathname}
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
