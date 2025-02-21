import React from "react";
import { Box, Typography } from "@mui/material";
import BgOther from "../../assets/images/banner/bannerOther.png";

export default function SliderOther() {
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
            maxWidth: "1170px",
            zIndex: "1",
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
        </Box>
      </Box>
    </>
  );
}
