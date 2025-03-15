import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Blogg from "../../assets/images/blog/blog.png";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SmsIcon from "@mui/icons-material/Sms";
export default function Blog() {
  return (
    <Box sx={{ backgroundColor: "#191a1a" }}>
      <Container disableGutters maxWidth="lg" sx={{ padding: "80px 15px" }}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={4} sx={{ padding: "0 15px" }}>
            <Box sx={{ marginTop: "30px" }}>
              <Box sx={{ overflow: "hidden" }}>
                <Box
                  component="img"
                  src={Blogg}
                  sx={{
                    transform: "scale(1)",
                    transition: "all 0.3s",
                    width: "100%",

                    "&:hover": {
                      transform: "scale(1.3)",
                      transition: "all 0.3s",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  padding: "24px 0px 7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarMonthIcon sx={{ color: "#FF8000" }} />
                  <Typography sx={{ marginLeft: "5px" }}>
                    JULY 22, 2022
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <SmsIcon sx={{ color: "#FF8000" }} />
                  <Typography sx={{ marginLeft: "5px" }}>
                    513 COMMENTS
                  </Typography>
                </Box>
              </Box>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontSize: "22px",
                  "&:hover": {
                    color: "#FF8000",
                    transition: "all 0.3s",
                    cursor: "pointer",
                  },
                }}
              >
                Magni architecto ab ad vero ut ipsam iste eum provident
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "#cdcdcd" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
                sunt nesciunt magnam sint, assumenda facere tenetur ipsam
                aspernatur quisquam labore?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
